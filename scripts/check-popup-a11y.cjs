const assert = require("node:assert/strict");
const pa11y = require("pa11y");
const puppeteer = require("puppeteer");
const { defaults, urls } = require("../.pa11yci.json");

const openDialog = 'dialog[open], [role="dialog"][data-state="open"]';
const desktop = { width: 1440, height: 1000 };
const phoneViewports = [
  { width: 320, height: 568 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
];
const cases = [
  ...phoneViewports.map((viewport) => ({ url: urls[0], viewport })),
  ...urls.map((url) => ({ url, viewport: desktop })),
];

async function check() {
  const browser = await puppeteer.launch(defaults.chromeLaunchConfig);
  try {
    for (const { url, viewport } of cases) {
      const context = await browser.createBrowserContext();
      try {
        const page = await context.newPage();
        await page.setViewport(viewport);
        // Keep exercising the popup after its real-world display window ends.
        await page.evaluateOnNewDocument(() => {
          Date.now = () => Date.parse("2026-10-24T12:00:00-04:00");
        });
        await page.goto(url, { waitUntil: "networkidle2" });
        const dialog = await page.waitForSelector(openDialog, { timeout: 10000 });
        const fits = await dialog.evaluate((element) => {
          const rect = element.getBoundingClientRect();
          return rect.left >= 0 && rect.top >= 0 &&
            rect.right <= innerWidth && rect.bottom <= innerHeight &&
            element.scrollWidth <= element.clientWidth &&
            element.scrollHeight <= element.clientHeight;
        });
        assert(fits, `Popup must fit ${viewport.width}×${viewport.height} without scrolling`);

        // Scan the whole document with both CI runners, including manual-review
        // warnings: dialog-only axe checks miss background focus problems.
        const result = await pa11y(url, {
          ...defaults, browser, page, viewport, ignoreUrl: true,
        });
        const findings = result.issues
          .filter(({ type }) => type === "error" || type === "warning")
          .map(({ code, selector }) => ({ code, selector }));
        assert.deepEqual(findings, [],
          `${url} at ${viewport.width}×${viewport.height}: open popup must pass the full CI accessibility scan`);

        for (let index = 0; index < 6; index++) {
          await page.keyboard.press("Tab");
          assert(await dialog.evaluate((element) => element.contains(document.activeElement)),
            "Keyboard focus must remain inside the modal");
        }
        await page.keyboard.press("Escape");
        await page.waitForFunction((selector) => !document.querySelector(selector), {}, openDialog);
        await page.focus("header a");
        assert(await page.evaluate(() => document.activeElement.matches("header a")),
          "Background links must become focusable again after dismissal");
        await page.reload({ waitUntil: "networkidle2" });
        assert.equal(await page.$(openDialog), null, "Popup must stay dismissed after reload");
        console.log(`Popup accessibility and keyboard checks passed: ${url} at ${viewport.width}×${viewport.height}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
}

check().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

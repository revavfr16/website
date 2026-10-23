# revavfr16-website

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/djzager/revavfr16-website)

## Accessibility check

Every pull request runs [pa11y-ci](https://github.com/pa11y/pa11y-ci) against a
production build of each page, using both the axe-core and HTML_CodeSniffer
engines at WCAG 2.1 AA. Any error or warning fails the check. To run it locally:

```sh
npm run build && npm run a11y
```

The same command also runs `scripts/check-popup-a11y.cjs`, which pins the browser
clock inside the event window and checks all five pages with the popup open,
plus phone, small phone, and landscape sizes. It also checks reflow, keyboard
focus, Escape dismissal, and session persistence. This keeps the popup covered
after its real-world display window ends. Run `npm run a11y:popup` separately
when a production preview is already serving on port 3000.

Configuration is in `.pa11yci.json`. Six rules are ignored, all of them
manual-check prompts rather than findings: HTML_CodeSniffer's F24 (inherited
background colour), H48 (navigation as a list), and G18/G145 `.Abs` (contrast of
absolutely positioned text, which is what visually hidden text is), the fixed-position
reflow prompt (the popup suite verifies actual viewport bounds and overflow), plus
axe's `frame-tested` for the cross-origin Google Calendar embed. The site is light-only, and Chrome is
pinned to a light colour scheme so results never depend on the machine's appearance setting.

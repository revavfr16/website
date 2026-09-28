# revavfr16-website

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/djzager/revavfr16-website)

## Accessibility check

Every pull request runs [pa11y-ci](https://github.com/pa11y/pa11y-ci) against a
production build of each page, using both the axe-core and HTML_CodeSniffer
engines at WCAG 2.1 AA. Any error or warning fails the check. To run it locally:

```sh
npm run build && npm run a11y
```

Configuration is in `.pa11yci.json`. Five rules are ignored, all of them
manual-check prompts rather than findings: HTML_CodeSniffer's F24 (inherited
background colour), H48 (navigation as a list), and G18/G145 `.Abs` (contrast of
absolutely positioned text, which is what visually hidden text is), plus axe's
`frame-tested` for the cross-origin Google Calendar embed. The site is light-only, and Chrome is
pinned to a light colour scheme so results never depend on the machine's appearance setting.

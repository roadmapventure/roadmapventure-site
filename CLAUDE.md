# RoadMapVenture Site — Claude Code Session Guide

## What This Is
John Leonard's personal/professional website.
- Live: https://www.roadmapventure.com
- Repo: `roadmapventure/roadmapventure-site` (GitHub)
- Hosting: Vercel — push to `main` deploys live immediately.

---

## Branch Rule
**Single branch: `main`.** Every commit goes live. No dev branch. Test carefully before committing.

---

## Site Structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage / hero |
| `resume.html` | Resume page |
| `about.html` | About page |
| `playbook.html` | Product playbook |
| `nigp-marketing.html` | Data intelligence / NIGP marketing |
| `patents.html` | Patents page |
| `amazon.html` | Amazon brief (unlisted) |
| `nav.js` | Shared navigation — injected into every page |
| `footer.js` | Shared footer — injected into every page |

**No build step.** Plain HTML + inline CSS + vanilla JS. No npm, no bundler, no framework.

---

## Design System (Locked)

CSS variables defined in `index.html` and replicated per page:

```
--ivory:   #faf8f5    (page background)
--ivory-2: #f3efe9    (alternate background)
--ink:     #1a1814    (primary text)
--ink-2:   #3a342c    (secondary text)
--ink-3:   #6b6057    (muted text)
--gold:    #c8a96e    (accent / rules / highlights)
--gold-lt: #e8d9bc    (light gold)
--rule:    rgba(200,169,110,.25)  (divider lines)
```

Fonts: `Cormorant Garamond` (display/serif), `DM Sans` (body)

Never introduce new fonts, colors, or CSS frameworks without John's explicit approval.

---

## Critical Rules

1. **`nav.js` and `footer.js` are shared across all pages.** Any change affects every page — verify all pages after touching either file.
2. **Contact info in `nav.js` is base64-encoded on purpose** — do not decode to plain text anywhere in the codebase.
3. **No npm, no build step, no dependencies.** Keep it plain HTML/CSS/JS.
4. **Images and assets** — do not delete or rename existing image files without confirming they are unreferenced.
5. **`main` deploys live immediately** — no staging. Only commit when changes are verified correct.

---

## Before Every Commit

- [ ] Opened the changed page(s) locally and confirmed layout looks correct
- [ ] If `nav.js` or `footer.js` was touched — spot-checked at least 3 pages
- [ ] No new external dependencies added
- [ ] No contact info decoded to plain text
- [ ] `git push origin main` — confirms deploy on Vercel

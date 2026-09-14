# something lovely

The source for the _something lovely_ newsletter. Editions are React components
rendered to email HTML, then sent from Gmail with Apps Script.

## Writing an edition

1. Copy the latest file in `src/app/(email-content)/` (e.g. `011.tsx` to
   `012.tsx`) and add it to `EDITIONS` in `src/app/(email-content)/editions.ts`.
2. Fill in the edition:
    - `vibe`: a few words under the masthead. Also used as the inbox preview
      line.
    - `cover`: 2–4 colours and a seed for the gradient cover. Change the seed to
      rearrange the same colours.
    - `question`: the edition's one question, with its id, text and tags as they
      appear on WDYT. The card links to `wdyt.site/ask/q/<id>`.
    - `content`: sections built from the components below.
3. Preview with `yarn dev` and open http://localhost:3000 (or `/?edition=11`).
   It re-renders on save, cover included.

### Components

| Component                              | Use                                                                                       |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| `<Section kind="...">`                 | A top-level block: `notes`, `changed-mind` or `found`. Its colour bar is the only marker. |
| `<Heading>`, `<Paragraph>`             | Section title and body text.                                                              |
| `<Link>`, `<Em>`                       | Inline link and emphasis.                                                                 |
| `<Callout>`                            | A tinted aside, like a P.S.                                                               |
| `<FoundList>`, `<FoundItem url title>` | A list of links, each with a line on why.                                                 |

## Sending

1. `yarn build:html 11` (or no number for the latest edition). This writes
   `archive/email-011_<timestamp>.html` and `archive/cover-011.jpg`. Commit
   both.
2. Send the HTML with your Apps Script. The HTML refers to the cover as
   `cid:cover`, so attach the cover as an inline image with that name:
   `inlineImages: { cover: coverBlob }`.

The HTML is plain ASCII (other characters are written as entities), so it's safe
to paste into Apps Script.

## Email constraints

Email clients support far less HTML and CSS than browsers, so the components
stick to what works in Gmail, Apple Mail and Outlook:

- Layout is tables with inline styles. No flexbox, grid, CSS variables or
  pseudo-elements.
- The `<style>` block only adds responsive padding and Apple Mail's dark
  palette. Gmail's apps apply their own dark mode.
- Manrope loads in Apple Mail. Other clients fall back to the system font.
- Gmail clips emails over ~102 KB; the build warns if an edition gets close.

## Legacy editions

Editions 004–010 were written in the old design. Their sources sit alongside the
new ones in `src/app/(email-content)/`, using the old components in
`src/app/(legacy)/` so they still compile. What was actually sent is in
`archive/`.

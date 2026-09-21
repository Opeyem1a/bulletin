# something lovely

The source for the _something lovely_ newsletter. Editions are React components
rendered to email HTML, then sent from Gmail with Apps Script.

## Writing an edition

1. Copy the latest file in `src/app/(email-content)/` (e.g. `011.tsx` to
   `012.tsx`) and add it to `EDITIONS` in `src/app/(email-content)/editions.ts`.
2. Fill in the edition:
    - `vibe`: a few words under the masthead. Also used as the inbox preview
      line.
    - `colors`: 2–4 colours, drawn as the gradient line under the masthead.
    - `content`: sections built from the components below.
3. Preview with `yarn dev` and open http://localhost:3000/preview (or
   `/preview?edition=11`). It re-renders on save. The preview only runs locally.

### Components

| Component                              | Use                                                                                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<Section>`                            | A top-level block, followed by three coral dots.                                                                                                                   |
| `<Heading>`, `<Paragraph>`             | Section title and body text.                                                                                                                                       |
| `<Link>`                               | Inline link. Every link gets the coral squiggle; nothing else is underlined.                                                                                       |
| `<Highlight>`                          | The homepage's highlighter, for the phrase that matters most.                                                                                                      |
| `<Struck>`, `<Em>`                     | Struck-through words, and italics for how a word sounds.                                                                                                           |
| `<Aside>`                              | Smaller, muted text, like "(sorry)" or a P.S. Write the parentheses yourself.                                                                                      |
| `<FoundList>`, `<FoundItem url title>` | A list of links, each with a line on why.                                                                                                                          |
| `<Question id text>`                   | A question from WDYT, set large, then your answer if you pass one as children, then a link to answer it on WDYT. Put it first in its own section, with no heading. |

## Sending

1. `yarn build:html 11` (or no number for the latest edition). This writes
   `archive/email-011_<timestamp>.html`. Commit it.
2. Send the HTML with your Apps Script. The email has no images, so there is
   nothing to attach.

The HTML is plain ASCII (other characters are written as entities), so it's safe
to paste into Apps Script.

## Signup page

The site's home page (`src/app/page.tsx`, with its pieces in
`src/app/(signup)/`) is a single paragraph about the newsletter with a signup
form under it.

- Each signup is posted to a Discord channel through a webhook. Add people to
  the mailing list from there. Set `DISCORD_WEBHOOK_URL` wherever the site is
  deployed. To try the form locally, copy `sample.env` to `.env.local` and fill
  it in.
- The hand-drawn marks on the paragraph (circle, squiggle, note, highlighter)
  are in `src/app/(signup)/marks.tsx`, styled in `src/app/(signup)/signup.css`.
- The page has its own palette at the top of `signup.css`: paper in light mode,
  near-black in dark mode, and coral for the hand-drawn marks. The email's
  palette in `src/app/(config)/theme.ts` matches it.

## Email constraints

Email clients support far less HTML and CSS than browsers, so the components
stick to what works in Gmail, Apple Mail and Outlook:

- Layout is tables with inline styles. No flexbox, grid, CSS variables or
  pseudo-elements.
- The `<style>` block only adds responsive padding and Apple Mail's dark
  palette. Gmail's apps apply their own dark mode.
- Manrope loads in Apple Mail. Other clients fall back to the system font.
- No images: the section dots are table cells, and the line under the masthead
  is a CSS gradient that falls back to one solid colour.
- Links are a straight coral border, upgraded to a wavy underline where the
  client supports it. Outlook on Windows shows a plain underline.
- Gmail clips emails over ~102 KB; the build warns if an edition gets close.

## Legacy editions

Editions 004–010 were written in the old design. Their sources sit alongside the
new ones in `src/app/(email-content)/`, using the old components in
`src/app/(legacy)/` so they still compile. What was actually sent is in
`archive/`.

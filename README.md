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
3. Preview with `yarn dev` and open http://localhost:3000/preview (or
   `/preview?edition=11`). It re-renders on save, cover included. The preview
   only runs locally.

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

Committing the archived HTML also makes the edition the sample on the signup
page, from the next deploy.

## Signup page

The site's home page (`src/app/page.tsx`, with its pieces in
`src/app/(signup)/`) is a signup form for the newsletter.

- Each signup is posted to a Discord channel through a webhook. Add people to
  the mailing list from there. Set `DISCORD_WEBHOOK_URL` wherever the site is
  deployed (and in `.env.local` to try the form locally).
- Under the form is the top of the latest sent edition: the newest one with HTML
  in `archive/`. Drafts never show up.
- The glow behind it is a cover, drawn by the same generator as the email's. It
  drifts slowly and rearranges itself to the email being typed, in a WebGL
  shader (`src/app/(signup)/glow.tsx`) that mirrors `src/utils/cover.ts`. With
  reduced motion or without WebGL it stays a still image. Its colours are
  `SIGNUP_COVER` in `src/app/(config)/constants.ts`.
- Colours come from `theme.ts`, so the page follows the email's palette,
  including its dark one.

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

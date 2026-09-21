import { Masthead } from '@/app/(components)/masthead';
import { Footer } from '@/app/(components)/footer';
import {
    COLORS,
    DARK_COLORS,
    FONT_STACK,
    highlightStroke,
    backgroundColorClass,
    DARK_MODE_CSS,
} from '@/app/(config)/theme';
import { getDocumentTitle } from '@/app/(config)/helpers';
import { Edition } from '@/utils/types';

/**
 * Hidden text that shows as the preview line in the inbox. The trailing
 * zero-width characters stop clients padding it with the start of the email.
 */
const escapeHtml = (text: string) =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const PREHEADER_PADDING = '&#8199;&#65279;&#847; '.repeat(40);

/**
 * Only for Apple Mail and Gmail: responsive padding, the wavy link squiggle, and
 * Apple Mail's dark palette (generated from theme.ts).
 * Everything else is inline so clients that drop this block still render the email.
 */
const STYLES = `
  body { margin:0; padding:0; -webkit-text-size-adjust:100%; }
  @media screen and (max-width:620px) {
    .px { padding-left:22px !important; padding-right:22px !important; }
    .outer { padding:0 !important; }
  }
  @supports (text-decoration-style: wavy) {
    .link { border-bottom:0 !important; text-decoration:underline wavy ${COLORS.coral} !important; text-decoration-thickness:2px !important; text-underline-offset:5px !important; text-decoration-skip-ink:none !important; }
  }
  @media (prefers-color-scheme: dark) {
${DARK_MODE_CSS}
    .highlight { background-image:${highlightStroke(DARK_COLORS.highlight)} !important; }
  }
`;

/**
 * Renders a complete email document. Written as a string template around the
 * React body because email needs things React can't output: a doctype, and
 * Outlook's conditional comments.
 */
async function renderEmail(edition: Edition) {
    // Imported lazily: Next.js rejects a static react-dom/server import in app/.
    const { renderToStaticMarkup } = await import('react-dom/server');
    const body = renderToStaticMarkup(
        <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{ width: '100%', maxWidth: '600px' }}
        >
            <tbody>
                <Masthead edition={edition} />
                {edition.content}
                <Footer editionNumber={edition.number} />
            </tbody>
        </table>
    );

    // The two `[if mso]` blocks target classic Outlook on Windows, which renders
    // with Word. The first hides the Manrope stylesheet from it (to every other
    // client that line is a plain <link>). The second forces Arial, because Outlook
    // falls back to Times New Roman when the first font in a stack isn't installed,
    // underlines links, because it ignores their coral border, and gives
    // highlights a flat colour, because it can't draw their gradient.
    // The last pair wraps the email in a fixed 600px table, since Outlook ignores
    // max-width.
    const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <title>${getDocumentTitle({ editionNumber: edition.number })}</title>
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap" rel="stylesheet"><!--<![endif]-->
        <!--[if mso]><style>td, p, h2, a, span { font-family: Arial, sans-serif !important; } a.link { text-decoration: underline !important; } .highlight { background-color: ${COLORS.highlight} !important; }</style><![endif]-->
        <style>${STYLES}</style>
    </head>
    <body class="${backgroundColorClass('page')}" style="margin:0;padding:0;background-color:${COLORS.page};">
        <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${COLORS.page};">${escapeHtml(edition.vibe)}${PREHEADER_PADDING}</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="${backgroundColorClass('page')}" style="background-color:${COLORS.page};font-family:${FONT_STACK.replace(/'/g, '&#39;')};">
            <tr>
                <td align="center" class="outer" style="padding:24px 12px;">
                    <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
                    ${body}
                    <!--[if mso]></td></tr></table><![endif]-->
                </td>
            </tr>
        </table>
    </body>
</html>`;

    // Apps Script has mangled pasted non-ASCII characters before (see the legacy
    // Emoji component), so anything outside ASCII becomes a numeric entity.
    return html.replace(
        /[^\x00-\x7F]/gu,
        (char) => `&#${char.codePointAt(0)};`
    );
}

export { renderEmail };

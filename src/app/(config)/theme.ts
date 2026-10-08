import { HexColor } from '@/utils/types';

/**
 * Every colour in the email lives here. The palette is the homepage's (see
 * signup.css): paper, cool ink, and coral for the marks only.
 *
 * Email clients only reliably keep inline styles, so elements use COLORS
 * inline. Dark mode can only be done from the <style> block, so an element also
 * carries a class naming its token (see the class helpers below), and
 * DARK_MODE_CSS swaps in the DARK_COLORS value for that token.
 */
const COLORS = {
    // Near white, so Gmail's forced dark mode inverts it to near black rather
    // than the grey-brown the homepage's #EFECE7 became.
    page: '#FBF9F6',
    ink: '#141821',
    body: '#373D4B',
    muted: '#5A6070',
    struck: '#767C8B',
    coral: '#FF8787',
    // The homepage's see-through coral highlight, mixed into the page colour
    // up front, since Outlook drops alpha.
    highlight: '#FDCBCA',
} satisfies Record<string, HexColor>;

type ColorToken = keyof typeof COLORS;

/**
 * The dark counterpart of every token, matching the homepage's dark mode. Only
 * Apple Mail uses these; Gmail's and Outlook's apps apply their own dark mode.
 */
const DARK_COLORS: Record<ColorToken, HexColor> = {
    page: '#0C0C0D',
    ink: '#FAFAFA',
    body: '#D9D9D9',
    muted: '#B5B5B5',
    struck: '#A3A3A3',
    coral: '#FF8787',
    highlight: '#7A4344',
};

/**
 * Put these on any element that uses a token inline, so dark mode can find it:
 * `className={textColorClass('ink')}` alongside `style={{ color: COLORS.ink }}`.
 */
const textColorClass = (token: ColorToken) => `c-${token}`;
const backgroundColorClass = (token: ColorToken) => `bg-${token}`;
const borderColorClass = (token: ColorToken) => `b-${token}`;

const DARK_MODE_CSS = (Object.keys(DARK_COLORS) as ColorToken[])
    .map((token) => {
        const dark = DARK_COLORS[token];
        return [
            `.${textColorClass(token)} { color:${dark} !important; }`,
            `.${backgroundColorClass(token)} { background-color:${dark} !important; }`,
            `.${borderColorClass(token)} { border-color:${dark} !important; }`,
        ].join('\n');
    })
    .join('\n');

/**
 * Manrope loads in Apple Mail. Gmail and Outlook ignore web fonts and fall
 * through to the system font, which is close enough in shape.
 */
const FONT_STACK = `Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;

export {
    COLORS,
    DARK_COLORS,
    DARK_MODE_CSS,
    FONT_STACK,
    textColorClass,
    backgroundColorClass,
    borderColorClass,
};

import { HexColor } from '@/utils/types';

/**
 * Every colour in the email lives here.
 *
 * Email clients only reliably keep inline styles, so elements use COLORS
 * inline. Dark mode can only be done from the <style> block, so an element also
 * carries a class naming its token (see the class helpers below), and
 * DARK_MODE_CSS swaps in the DARK_COLORS value for that token.
 */
const COLORS = {
    page: '#EFECE7',
    card: '#FFFFFF',
    ink: '#1B1B1B',
    body: '#3A3835',
    muted: '#8E8A84',
    line: '#EEEBE6',
    coral: '#FF6160',
    questionCard: '#F4F1ED',
    questionCardBorder: '#ECE8E1',
    chip: '#EAE6E0',
    calloutBackground: '#FDF1DC',
    calloutInk: '#6B4A12',
} satisfies Record<string, HexColor>;

type ColorToken = keyof typeof COLORS;

/**
 * The dark counterpart of every token. Only Apple Mail uses these; Gmail's and
 * Outlook's apps apply their own dark mode.
 */
const DARK_COLORS: Record<ColorToken, HexColor> = {
    page: '#0E0D0C',
    card: '#161514',
    ink: '#EDE9E4',
    body: '#CFCAC3',
    muted: '#9A938B',
    line: '#2A2724',
    coral: '#FF7A72',
    questionCard: '#1C1A18',
    questionCardBorder: '#2A2724',
    chip: '#2A2724',
    calloutBackground: '#33261A',
    calloutInk: '#F6D9B0',
};

/**
 * Each kind of section keeps its colour across every edition. The colour is the
 * only marker; sections are never labelled. These read well on both the light
 * and dark card, so they have no dark counterpart.
 */
const SECTION_COLORS = {
    notes: '#F5A524',
    'changed-mind': '#2FA66F',
    found: '#3E8EDE',
} satisfies Record<string, HexColor>;

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
    SECTION_COLORS,
    DARK_MODE_CSS,
    FONT_STACK,
    textColorClass,
    backgroundColorClass,
    borderColorClass,
};

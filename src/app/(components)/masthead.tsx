import { NAME } from '@/app/(config)/constants';
import { COLORS, FONT_STACK, textColorClass } from '@/app/(config)/theme';
import { formatEditionNumber, getAverageColor } from '@/app/(config)/helpers';
import { Edition } from '@/utils/types';

interface MastheadProps {
    edition: Edition;
}

const Masthead = ({ edition }: MastheadProps) => {
    return (
        <tr>
            <td className="px" style={{ padding: '28px 40px 0' }}>
                <table
                    role="presentation"
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                >
                    <tbody>
                        <tr>
                            <td
                                className={textColorClass('ink')}
                                style={{
                                    fontFamily: FONT_STACK,
                                    fontSize: '30px',
                                    lineHeight: '36px',
                                    fontWeight: 700,
                                    letterSpacing: '-0.8px',
                                    color: COLORS.ink,
                                }}
                            >
                                {NAME}
                            </td>
                            <td
                                align="right"
                                className={textColorClass('ink')}
                                style={{
                                    fontFamily: FONT_STACK,
                                    fontSize: '18px',
                                    lineHeight: '36px',
                                    fontWeight: 700,
                                    color: COLORS.ink,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                #{formatEditionNumber(edition.number)}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p
                    className={textColorClass('muted')}
                    style={{
                        margin: '2px 0 0',
                        fontFamily: FONT_STACK,
                        fontSize: '15px',
                        lineHeight: '22px',
                        fontWeight: 500,
                        color: COLORS.muted,
                    }}
                >
                    {edition.vibe}
                </p>
                <GradientLine colors={edition.colors} />
            </td>
        </tr>
    );
};

/**
 * The edition's colours as a thin line. Clients that can't draw the gradient
 * (Outlook on Windows, Gmail on Android) show the average colour instead.
 */
const GradientLine = ({ colors }: { colors: Edition['colors'] }) => {
    const average = getAverageColor(colors);
    return (
        <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{ marginTop: '22px' }}
        >
            <tbody>
                <tr>
                    <td
                        height="6"
                        style={{
                            height: '6px',
                            borderRadius: '3px',
                            backgroundColor: average,
                            backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
                            fontSize: 0,
                            lineHeight: 0,
                        }}
                    >
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export { Masthead };

import { NAME } from '@/app/(config)/constants';
import {
    COLORS,
    FONT_STACK,
    textColorClass,
    borderColorClass,
} from '@/app/(config)/theme';
import {
    formatEditionNumber,
    getCoverBackground,
} from '@/app/(config)/helpers';
import { Edition } from '@/utils/types';

interface MastheadProps {
    edition: Edition;
    coverSrc: string;
}

const Masthead = ({ edition, coverSrc }: MastheadProps) => {
    return (
        <>
            <tr>
                <td style={{ fontSize: 0, lineHeight: 0 }}>
                    <img
                        src={coverSrc}
                        width="600"
                        height="300"
                        alt={`Cover: ${edition.vibe}`}
                        style={{
                            display: 'block',
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            backgroundColor: getCoverBackground(
                                edition.cover.colors
                            ),
                        }}
                    />
                </td>
            </tr>
            <tr>
                <td
                    className={`px ${borderColorClass('line')}`}
                    style={{
                        padding: '22px 40px',
                        borderBottom: `1px solid ${COLORS.line}`,
                    }}
                >
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
                                        fontSize: '26px',
                                        lineHeight: '30px',
                                        fontWeight: 600,
                                        letterSpacing: '-0.6px',
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
                                        fontSize: '16px',
                                        lineHeight: '30px',
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
                            margin: '4px 0 0',
                            fontFamily: FONT_STACK,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: COLORS.muted,
                        }}
                    >
                        {edition.vibe}
                    </p>
                </td>
            </tr>
        </>
    );
};

export { Masthead };

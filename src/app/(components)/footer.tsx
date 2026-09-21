import { NAME } from '@/app/(config)/constants';
import { COLORS, FONT_STACK, textColorClass } from '@/app/(config)/theme';
import { formatEditionNumber } from '@/app/(config)/helpers';
import { Highlight } from '@/app/(components)/text';

interface FooterProps {
    editionNumber: number;
}

const Footer = ({ editionNumber }: FooterProps) => {
    return (
        <tr>
            <td className="px" style={{ padding: '30px 40px 40px' }}>
                <p
                    className={textColorClass('ink')}
                    style={{
                        margin: 0,
                        fontFamily: FONT_STACK,
                        fontSize: '22px',
                        lineHeight: '32px',
                        fontWeight: 500,
                        letterSpacing: '-0.4px',
                        color: COLORS.ink,
                    }}
                >
                    Hit reply, I read and reply to{' '}
                    <Highlight>every single one</Highlight>.
                </p>
                <p
                    className={textColorClass('body')}
                    style={{
                        margin: '10px 0 0',
                        fontFamily: FONT_STACK,
                        fontSize: '14px',
                        lineHeight: '21px',
                        fontWeight: 500,
                        color: COLORS.body,
                    }}
                >
                    Email me to &quot;unsubscribe.&quot; No hard feelings, ever.
                </p>
                <p
                    className={textColorClass('muted')}
                    style={{
                        margin: '22px 0 0',
                        fontFamily: FONT_STACK,
                        fontSize: '13px',
                        lineHeight: '20px',
                        fontWeight: 600,
                        color: COLORS.muted,
                    }}
                >
                    {NAME} #{formatEditionNumber(editionNumber)} · made with
                    honesty &amp; curiosity
                </p>
            </td>
        </tr>
    );
};

export { Footer };

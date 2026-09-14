import { NAME } from '@/app/(config)/constants';
import {
    COLORS,
    FONT_STACK,
    textColorClass,
    borderColorClass,
} from '@/app/(config)/theme';
import { formatEditionNumber } from '@/app/(config)/helpers';

interface FooterProps {
    editionNumber: number;
}

const Footer = ({ editionNumber }: FooterProps) => {
    return (
        <>
            <tr>
                <td className="px" style={{ padding: '40px 40px 0' }}>
                    <div
                        className={borderColorClass('line')}
                        style={{
                            borderTop: `1px solid ${COLORS.line}`,
                            fontSize: 0,
                            lineHeight: 0,
                        }}
                    >
                        &nbsp;
                    </div>
                </td>
            </tr>
            <tr>
                <td
                    className={`px ${textColorClass('muted')}`}
                    style={{
                        padding: '18px 40px 32px',
                        fontFamily: FONT_STACK,
                        fontSize: '13px',
                        lineHeight: '21px',
                        color: COLORS.muted,
                    }}
                >
                    <span
                        className={textColorClass('ink')}
                        style={{ color: COLORS.ink, fontWeight: 600 }}
                    >
                        {NAME} #{formatEditionNumber(editionNumber)}
                    </span>
                    <br />
                    Made with honesty &amp; curiosity. Hit reply, I read every
                    one.
                    <br />
                    Email me to &quot;unsubscribe.&quot; No hard feelings, ever.
                </td>
            </tr>
        </>
    );
};

export { Footer };

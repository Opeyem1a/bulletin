import { ReactNode } from 'react';
import { COLORS } from '@/app/(config)/theme';

interface SectionProps {
    children: ReactNode;
}

/** A top-level block of the edition, followed by three coral dots. */
const Section = ({ children }: SectionProps) => {
    return (
        <>
            <tr>
                <td className="px" style={{ padding: '30px 40px 0' }}>
                    {children}
                </td>
            </tr>
            <tr>
                <td className="px" style={{ padding: '36px 40px 0' }}>
                    <Dots />
                </td>
            </tr>
        </>
    );
};

/** Plain table cells rather than an image, so they show in every client. */
const Dots = () => {
    return (
        <table
            role="presentation"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            aria-hidden
        >
            <tbody>
                <tr>
                    <Dot />
                    <Gap />
                    <Dot />
                    <Gap />
                    <Dot />
                </tr>
            </tbody>
        </table>
    );
};

const Dot = () => {
    return (
        <td
            width="8"
            height="8"
            style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: COLORS.coral,
                fontSize: 0,
                lineHeight: 0,
            }}
        >
            &nbsp;
        </td>
    );
};

const Gap = () => {
    return (
        <td width="7" style={{ width: '7px', fontSize: 0, lineHeight: 0 }}>
            &nbsp;
        </td>
    );
};

export { Section };

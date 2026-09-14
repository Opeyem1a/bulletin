import { ReactNode } from 'react';
import { SECTION_COLORS } from '@/app/(config)/theme';

interface SectionProps {
    kind: keyof typeof SECTION_COLORS;
    children: ReactNode;
}

/**
 * A top-level block of the edition. The short bar in the section's colour is
 * the only marker of what kind of section it is.
 */
const Section = ({ kind, children }: SectionProps) => {
    return (
        <tr>
            <td className="px" style={{ padding: '36px 40px 0' }}>
                <table
                    role="presentation"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                >
                    <tbody>
                        <tr>
                            <td
                                width="24"
                                height="4"
                                style={{
                                    width: '24px',
                                    height: '4px',
                                    backgroundColor: SECTION_COLORS[kind],
                                    borderRadius: '2px',
                                    fontSize: 0,
                                    lineHeight: 0,
                                }}
                            >
                                &nbsp;
                            </td>
                        </tr>
                    </tbody>
                </table>
                {children}
            </td>
        </tr>
    );
};

export { Section };

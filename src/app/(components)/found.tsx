import { ReactNode } from 'react';
import { COLORS, FONT_STACK, textColorClass } from '@/app/(config)/theme';
import { Link } from '@/app/(components)/text';

interface FoundListProps {
    children: ReactNode;
}

const FoundList = ({ children }: FoundListProps) => {
    return (
        <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{ marginTop: '6px' }}
        >
            <tbody>{children}</tbody>
        </table>
    );
};

interface FoundItemProps {
    url: string;
    title: string;
    children: ReactNode;
}

const FoundItem = ({ url, title, children }: FoundItemProps) => {
    const domain = new URL(url).hostname.replace(/^www\./, '');
    return (
        <tr>
            <td style={{ padding: '12px 0' }}>
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
                                style={{
                                    fontFamily: FONT_STACK,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    fontWeight: 700,
                                }}
                            >
                                <Link href={url}>{title}</Link>
                            </td>
                            <td
                                align="right"
                                valign="top"
                                className={textColorClass('muted')}
                                style={{
                                    paddingLeft: '12px',
                                    fontFamily: FONT_STACK,
                                    fontSize: '13px',
                                    lineHeight: '24px',
                                    color: COLORS.muted,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {domain}
                            </td>
                        </tr>
                        <tr>
                            <td
                                colSpan={2}
                                className={textColorClass('body')}
                                style={{
                                    paddingTop: '4px',
                                    fontFamily: FONT_STACK,
                                    fontSize: '14px',
                                    lineHeight: '21px',
                                    fontWeight: 500,
                                    color: COLORS.body,
                                }}
                            >
                                {children}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

export { FoundList, FoundItem };

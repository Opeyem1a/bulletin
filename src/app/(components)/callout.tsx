import { ReactNode } from 'react';
import {
    COLORS,
    FONT_STACK,
    textColorClass,
    backgroundColorClass,
} from '@/app/(config)/theme';

interface CalloutProps {
    children: ReactNode;
}

const Callout = ({ children }: CalloutProps) => {
    return (
        <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{ marginTop: '16px' }}
        >
            <tbody>
                <tr>
                    <td
                        className={`${backgroundColorClass('calloutBackground')} ${textColorClass('calloutInk')}`}
                        style={{
                            backgroundColor: COLORS.calloutBackground,
                            borderRadius: '8px',
                            padding: '12px 16px',
                            fontFamily: FONT_STACK,
                            fontSize: '15px',
                            lineHeight: '22px',
                            color: COLORS.calloutInk,
                        }}
                    >
                        {children}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export { Callout };

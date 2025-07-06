import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <tr>
            <td>{children}</td>
        </tr>
    );
};

export { Section };

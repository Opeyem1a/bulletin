import { NAME } from '@/app/(config)/constants';
import { getEditionName } from '@/app/(config)/helpers';

interface HeaderProps {
    editionNumber: number;
}

const Header = ({ editionNumber }: HeaderProps) => {
    return (
        <tr>
            <td style={{ textAlign: 'left' }}>
                <p
                    style={{
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#185B6A',
                        margin: 0,
                    }}
                >
                    {NAME}
                </p>
                <p
                    style={{
                        fontSize: '14px',
                        color: '#185B6A',
                        marginTop: '4px',
                    }}
                >
                    {getEditionName(editionNumber)}
                </p>
            </td>
        </tr>
    );
};

export { Header };

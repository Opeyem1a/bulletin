import { Spacer } from '@/app/(components)/spacer';
import { Header } from '@/app/(components)/header';
import { Footer } from '@/app/(components)/footer';
import { getDocumentTitle } from '@/app/(config)/helpers';
import { EmailContent005 } from '@/app/(email-content)/005';

interface EmailComponentProps {
    editionNumber: number;
}

const Email = ({ editionNumber }: EmailComponentProps) => {
    return (
        <html>
            <head>
                <title>{getDocumentTitle({ editionNumber })}</title>
                <meta charSet="UTF-8" />
            </head>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
                <table
                    role="presentation"
                    cellPadding="0"
                    cellSpacing="0"
                    width="100%"
                    style={{ backgroundColor: '#185B6A' }}
                >
                    <tbody>
                        <tr>
                            <td align="center" style={{ padding: '48px 0' }}>
                                <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    width="600"
                                    style={{
                                        backgroundColor: '#F4F1ED',
                                        padding: '40px 32px',
                                        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
                                        color: '#1f2937',
                                        boxShadow:
                                            '0 6px 20px rgba(0,0,0,0.04)',
                                        borderRadius: '16px',
                                    }}
                                >
                                    <tbody>
                                        <Header editionNumber={editionNumber} />
                                        <Spacer height="28px" />
                                        <EmailContent005 />
                                        <Spacer height="24px" />
                                        <Footer />
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    );
};

const PreviewEmailPage = () => {
    return <Email editionNumber={5} />;
};

export default PreviewEmailPage;
export { Email };

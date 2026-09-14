import {
    COLORS,
    FONT_STACK,
    textColorClass,
    backgroundColorClass,
    borderColorClass,
} from '@/app/(config)/theme';
import { getQuestionUrl } from '@/app/(config)/helpers';
import { Edition } from '@/utils/types';

interface QuestionCardProps {
    question: Edition['question'];
}

const QUESTION_ID_STYLE = {
    fontFamily: FONT_STACK,
    fontSize: '17px',
    lineHeight: '22px',
    fontWeight: 700,
};

const QUESTION_TEXT_STYLE = {
    height: '360px',
    fontFamily: FONT_STACK,
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 600,
    letterSpacing: '-0.4px',
};

/**
 * The edition's one question, styled like a card on WDYT. The number and the
 * question each link to it (a link wrapped around the whole card doesn't work
 * in Outlook).
 */
const QuestionCard = ({ question }: QuestionCardProps) => {
    const url = getQuestionUrl(question.id);
    return (
        <tr>
            <td
                className="px"
                align="center"
                style={{ padding: '48px 40px 0' }}
            >
                <table
                    role="presentation"
                    width="340"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    align="center"
                    style={{
                        width: '100%',
                        maxWidth: '340px',
                        margin: '0 auto',
                    }}
                >
                    <tbody>
                        <tr>
                            <td
                                className={`${backgroundColorClass('questionCard')} ${borderColorClass('questionCardBorder')}`}
                                style={{
                                    backgroundColor: COLORS.questionCard,
                                    border: `1px solid ${COLORS.questionCardBorder}`,
                                    borderRadius: '24px',
                                    padding: '30px 30px 24px',
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
                                            <td style={QUESTION_ID_STYLE}>
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    className={textColorClass(
                                                        'ink'
                                                    )}
                                                    style={{
                                                        color: COLORS.ink,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    #{question.id}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                height="360"
                                                valign="middle"
                                                className="question-middle"
                                                style={QUESTION_TEXT_STYLE}
                                            >
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    className={textColorClass(
                                                        'coral'
                                                    )}
                                                    style={{
                                                        color: COLORS.coral,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    {question.text}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {question.tags.map((tag) => (
                                                    <Chip key={tag}>{tag}</Chip>
                                                ))}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
};

const Chip = ({ children }: { children: string }) => {
    return (
        <span
            className={`${backgroundColorClass('chip')} ${textColorClass('muted')}`}
            style={{
                display: 'inline-block',
                backgroundColor: COLORS.chip,
                color: COLORS.muted,
                borderRadius: '5px',
                padding: '3px 8px',
                marginRight: '4px',
                fontFamily: FONT_STACK,
                fontSize: '12px',
                lineHeight: '16px',
            }}
        >
            {children}
        </span>
    );
};

export { QuestionCard };

import { ReactNode } from 'react';
import { COLORS, FONT_STACK, textColorClass } from '@/app/(config)/theme';
import { getQuestionUrl } from '@/app/(config)/helpers';
import { Highlight, Link } from '@/app/(components)/text';

interface QuestionProps {
    /** The question's id on WDYT. */
    id: number;
    text: string;
    /** Your own answer, if you want to give one. */
    children?: ReactNode;
}

/**
 * A question from WDYT, set large under the highlighter, then your answer if
 * there is one, then a link to answer it there. It leads its own Section, with
 * no heading: the question is the title.
 */
const Question = ({ id, text, children }: QuestionProps) => {
    return (
        <>
            <p
                className={textColorClass('ink')}
                style={{
                    margin: 0,
                    fontFamily: FONT_STACK,
                    fontSize: '32px',
                    lineHeight: '48px',
                    fontWeight: 500,
                    letterSpacing: '-0.8px',
                    color: COLORS.ink,
                }}
            >
                <Highlight>{text}</Highlight>
            </p>
            {children}
            <p
                style={{
                    margin: '16px 0 0',
                    fontFamily: FONT_STACK,
                    fontSize: '17px',
                    lineHeight: '28px',
                    fontWeight: 500,
                }}
            >
                <Link href={getQuestionUrl(id)}>What&apos;s your answer?</Link>
            </p>
        </>
    );
};

export { Question };

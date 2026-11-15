import { Section } from '@/app/(components)/section';
import { Heading, Paragraph } from '@/app/(components)/text';
import { Edition } from '@/utils/types';

const edition013: Edition = {
    number: 13,
    vibe: 'TODO',
    colors: ['#7FB7BE', '#F2637E'],
    content: (
        <>
            <Section>
                {/*
                 * Stub: POSIWID essay.
                 * - Stafford Beer: "the purpose of a system is what it does"
                 * - Intent vs outcome; the observer draws the system's boundary
                 * - The worker pressured to use AI (follows on from 011's
                 *   "Undercover artist")
                 * - Responsibility vs blame: Thompson's "many hands", Young's
                 *   social connection model
                 * - The prisoner's dilemma objection, and Nuremberg's reply
                 */}
                <Heading>The purpose of a system is what it does</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
        </>
    ),
};

export { edition013 };

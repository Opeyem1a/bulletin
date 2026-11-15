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
            <Section>
                {/*
                 * Stub: premature generalization.
                 * - Source: Bryan Pocius, "Sometimes you just need a toaster"
                 *   https://bryanpocius.com/writing/sometimes-you-just-need-a-toaster/
                 * - Point solutions grow into suites; users get frustrated
                 *   when the core job gets harder, so startups win by doing
                 *   that one thing well
                 * - Same with appliances: "I want my point solutions"
                 */}
                <Heading>Premature generalization</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                {/*
                 * Stub: lost soul bias.
                 * - Ryan Moulton (@moultano), Nov 13, 2026: some topics are
                 *   discussed mostly by people who haven't figured them out,
                 *   because people who do stop talking about them
                 * - Dating, productivity, job hunting, fitness; @o_sneedy's
                 *   reply: death, since no one comes back to report
                 * - Mirror image of survivorship bias; Lao Tzu: "those who
                 *   know do not speak; those who speak do not know"
                 * - Takeaway: seek out the people who quietly solved it
                 */}
                <Heading>Lost soul bias</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
        </>
    ),
};

export { edition013 };

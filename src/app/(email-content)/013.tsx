import { Section } from '@/app/(components)/section';
import { Heading, Paragraph } from '@/app/(components)/text';
import { FoundItem, FoundList } from '@/app/(components)/found';
import { Question } from '@/app/(components)/question';
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
                 *   https://en.wikipedia.org/wiki/The_purpose_of_a_system_is_what_it_does
                 *   Beer, "What is cybernetics?" (Kybernetes, 2002):
                 *   https://doi.org/10.1108/03684920210417283
                 * - Counterexamples: the cobra effect, Prohibition, chemo
                 *   https://en.wikipedia.org/wiki/Perverse_incentive
                 * - Intent vs outcome; the observer draws the system's boundary
                 *   Heinz von Foerster, second-order cybernetics and "act
                 *   always so as to increase the number of choices":
                 *   https://en.wikipedia.org/wiki/Heinz_von_Foerster
                 * - The worker pressured to use AI (follows on from 011's
                 *   "Undercover artist")
                 * - Responsibility vs blame:
                 *   Dennis Thompson, "Moral Responsibility of Public
                 *   Officials: The Problem of Many Hands" (APSR, 1980):
                 *   https://www.cambridge.org/core/product/identifier/S0003055400169515/type/journal_article
                 *   Iris Marion Young, social connection model, from
                 *   "Responsibility for Justice" (2011):
                 *   https://en.wikipedia.org/wiki/Iris_Marion_Young
                 *   Hannah Arendt, "banality of evil":
                 *   https://en.wikipedia.org/wiki/Eichmann_in_Jerusalem
                 * - The prisoner's dilemma (inefficacy) objection:
                 *   Shelly Kagan, "Do I Make a Difference?" (2011):
                 *   https://stafforini.com/pdfs/kagan-2011-make-difference.pdf
                 * - Nuremberg's reply, Principle IV ("provided a moral choice
                 *   was in fact possible to him"):
                 *   https://hrlibrary.umn.edu/instree/1950a.htm
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
                 *   https://x.com/moultano (TODO: link the tweet itself)
                 * - Dating, productivity, job hunting, fitness; @o_sneedy's
                 *   reply: death, since no one comes back to report
                 *   https://x.com/o_sneedy (TODO: link the reply itself)
                 * - Mirror image of survivorship bias:
                 *   https://en.wikipedia.org/wiki/Survivorship_bias
                 *   Lao Tzu, Tao Te Ching ch. 56: "those who know do not
                 *   speak; those who speak do not know"
                 * - Research notes: https://claude.ai/artifact/Q1iuFUSxfYLpSNd87otYeN
                 * - Takeaway: seek out the people who quietly solved it
                 */}
                <Heading>Lost soul bias</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    {/* Sasidharan's personal site: products, open-source apps, experiments. */}
                    <FoundItem url="https://sasi.codes/" title="sasi.codes">
                        TODO
                    </FoundItem>
                    {/* Anish Gupta's portfolio: products, AI tools, WebGL/3D experiments. */}
                    <FoundItem
                        url="https://www.anishfn.ink/"
                        title="anishfn.ink"
                    >
                        TODO
                    </FoundItem>
                </FoundList>
            </Section>
            <Section>
                <Question
                    id={1124}
                    text="Which matters more, intention or outcome?"
                >
                    <Paragraph>TODO</Paragraph>
                </Question>
            </Section>
        </>
    ),
};

export { edition013 };

import { Section } from '@/app/(components)/section';
import { Aside, Em, Heading, Link, Paragraph } from '@/app/(components)/text';
import { FoundItem, FoundList } from '@/app/(components)/found';
import { Question } from '@/app/(components)/question';
import { Edition } from '@/utils/types';

/**
 * Draft of edition 011. Everything below is placeholder, copied from 010 to show
 * the new format: replace the vibe, colours and content before sending.
 */
const edition011: Edition = {
    number: 11,
    vibe: "oh boy we're in for a treat",
    colors: ['#FF8A6B', '#FFC46B', '#FFE9C7', '#F2637E'],
    content: (
        <>
            <Section kind="notes">
                <Heading>Life is dazzlingly insane</Heading>
                <Paragraph>
                    TBD - fresh look, fresh me. World is wild, I've been
                    thinking big boy thoughts, and writing helps to process them
                </Paragraph>
                <Paragraph>
                    Quick update on me. I'm a little meh these days. I tend to
                    retreat to writing to find myself when I feel lost and that
                    is no different now. I've been obsessing over{' '}
                    <Link href="https://wdyt.site">wdyt</Link> because it's fun,
                    and I'm currently looking for new question submissions.
                    Board game update, I'm looking for playtesters in Calgary to
                    iron things out - if you're interested, hit my line. I've
                    also touched my camera again so I'm a little
                    portrait-photography-curious these days. Now that we're done
                    with this lightning round, let's hop in.
                </Paragraph>
            </Section>
            <Section kind="notes">
                <Heading>What is a job?</Heading>
                <Paragraph>
                    TBD, I've been considering other roles for the first time in
                    a while.
                </Paragraph>
            </Section>
            <Section kind="notes">
                <Heading>Guest writer - MC</Heading>
                <Paragraph>TBD - Just post hers with a prelude</Paragraph>
            </Section>
            <Section kind="changed-mind">
                <Heading>I don't want to play zero-sum games</Heading>
                <Paragraph>
                    TBD - I want to believe they don't have to exist, but
                    sometimes I struggle
                </Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    <FoundItem
                        url="https://artofhosting.luma.com/"
                        title="The art of hosting"
                    >
                        TBD
                    </FoundItem>
                    <FoundItem
                        url="https://www.fieldnotes.nautilus.quest/p/prompt-the-experiences-you-want"
                        title="Prompt the experiences you want"
                    >
                        TBD
                    </FoundItem>
                    <FoundItem
                        url="https://henry.codes/writing/it-doesnt-matter-if-it-works/"
                        title="It doesn't matter if it works"
                    >
                        TBD
                    </FoundItem>
                    <FoundItem
                        url="https://www.youtube.com/watch?v=ZhFH8pi6Jdo"
                        title="When teenagers run virtual democracies"
                    >
                        TBD
                    </FoundItem>
                </FoundList>
            </Section>
            <Section>
                <Question
                    id={1035}
                    text="What do you admire about your father?"
                />
            </Section>
        </>
    ),
};

export { edition011 };

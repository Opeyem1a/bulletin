import { Section } from '@/app/(components)/section';
import { Heading, Paragraph } from '@/app/(components)/text';
import { FoundItem, FoundList } from '@/app/(components)/found';
import { Edition } from '@/utils/types';

const edition012: Edition = {
    number: 12,
    vibe: 'TODO',
    colors: ['#6BA8FF', '#8FE3C9', '#E7F7C7', '#B48CF2'],
    content: (
        <>
            <Section>
                <Heading>TODO</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                {/*
                 * Notes: went to an ice cream making workshop and learned
                 * about some of the art behind ice cream. Reminded that
                 * everything is an art when practiced with focus, study, and
                 * intention. Maybe ties back to "Undercover artist" in 011.
                 */}
                <Heading>TODO</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                {/*
                 * Notes: inspired by "The internet is all porn and you might
                 * not even realize it" -
                 * https://charliegedeon.com/the-internet-is-all-porn-and-you-might-not-even-realize-it/
                 * Reflections on how many things are a replica of a thing
                 * pretending to be that thing. I've especially fallen into
                 * this trap myself - my life kinda has this allure of
                 * something that is desired from afar.
                 */}
                <Heading>Everything is porn</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                <Heading>Painters paint</Heading>
                <Paragraph>TODO</Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    <FoundItem
                        url="https://www.hyrumslaw.com/"
                        title="Hyrum's Law"
                    >
                        TODO
                    </FoundItem>
                    <FoundItem
                        url="https://ifeelsomuchsha.me/"
                        title="ifeelsomuchsha.me"
                    >
                        TODO
                    </FoundItem>
                    <FoundItem
                        url="https://blog.tally.so/6-years-in-6-million-far/"
                        title="6 years in, $6 million far"
                    >
                        TODO
                    </FoundItem>
                </FoundList>
            </Section>
        </>
    ),
};

export { edition012 };

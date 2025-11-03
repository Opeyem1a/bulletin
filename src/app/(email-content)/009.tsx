import { Em, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';
import { Callout } from '@/app/(components)/callout';

const EmailContent009 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again friends</Text>
                <Text variant="base">
                    Wagwan gang, it has been a while. I thought it was a good
                    idea to chain multiple trips together while also neglecting
                    my normal reflection rituals, and that demolished my writing
                    cadence. It is now my mission to make sure I write this
                    before I procrastinate further.
                </Text>
                <Text variant="base">
                    I&apos;ve learned a lot about action and the importance of
                    the &quot;send it&quot; mindset, so you&apos;re getting the
                    unpolished stream of consciousness today. Buckle up.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Do you know what you&apos;re good at?
                </Text>
                <Text variant="base">
                    My most recent work revelation is that people have painfully
                    obvious strengths and weaknesses. For the anime nerds, I
                    view this somewhat like nen types from Hunter X Hunter.
                    People <Em>can</Em> learn skills outside of their natural
                    skillset, but it&apos;s less efficient to do so. The further
                    from their natural skillset, the slower their pace of
                    learning or the worse the quality of their output. Even the
                    documented existence of the{' '}
                    <UrlBadge
                        url="https://www.google.com/search?q=peter+principle"
                        variant="site"
                    >
                        Peter Principle
                    </UrlBadge>{' '}
                    hints that it&apos;s quite easy for people to find
                    themselves trapped trying to excel in areas far outside of
                    their innate talents.
                </Text>
                <Text variant="base">
                    What this implies to me is that understanding what
                    one&apos;s natural skillset is (or &quot;nen affinity&quot;
                    for the nerds) is actually the cheat code to properly
                    setting expectations and allocating effort in personal
                    development. I think a lot about what I believe mine to be
                    and I wonder if others know theirs too.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Why do I self-impose surveillance?</Text>
                <Text variant="base">
                    I notice myself choosing to invite judgement into my private
                    thoughts frequently. Recently I made something. A proof of
                    concept for a motion design effect I figured out. For
                    whatever reason, I decided to shop the prototype around to
                    friends for &quot;feedback&quot; before I continued
                    &quot;polishing it&quot;. In reality, it was my first
                    attempt at even trying to make something with motion in an
                    embarrassingly long time. Instead of just letting myself
                    call that a prototype and using that momentum to continue
                    iterating, I pushed my network to critique it until the list
                    of notes for improvement choked any motivation I had to
                    continue.
                </Text>
                <Text variant="base">
                    Reflecting on this, I realize I do this a lot. And it&apos;s
                    entirely unnecessary. Every time I open the comments to see
                    which opinions I&apos;m allowed to have or phrase my
                    thoughts as a question instead of a statement, I wittle away
                    my individuality and agency. This has become a focused area
                    of improvement for me in my personal and professional lives.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">AI is a weird conundrum</Text>
                <Text variant="base">
                    On one hand, LLM technology is incredibly cool and useful.
                    On the other hand, there&apos;s a growing moral debate
                    around its usage and the largely unethical way it was
                    created in the first place. As a Guy in Tech
                    <Emoji icon="™️" />, I find myself torn. I want to push the
                    frontier and figure out how to best integrate new technology
                    in a way that paves a sustainable path, but I also worry
                    that I use this an excuse to avoid taking any accountability
                    for my usage of these sorts of tools. I think I am generally
                    on the side that if people are going to be making decisions
                    on this sort of technology, I&apos;d rather be in the room
                    than not, but I&apos;m curious to understand more sides to
                    this issue as I move forward.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.instagram.com/p/DO-m3yGjiBp/"
                        variant="media"
                    >
                        <Emoji icon="🎬" /> [Defining a value]
                    </UrlBadge>{' '}
                    is a short video about values. The creator defines values as
                    what we&apos;re willing to (a) fight for, (b) sacrifice for,
                    (c) pay for, and (d) spend time on. I thought this was a
                    compelling definition worth further discussion so I&apos;m
                    sharing it here for my fellow ponderers to ponder.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.instagram.com/p/DPuGGl6EslC/?img_index=1"
                        variant="media"
                    >
                        <Emoji icon="👀" /> Listening &amp; maybe learning
                    </UrlBadge>{' '}
                    is something I designed randomly to get a lot of thoughts
                    off of my mind. If you&apos;re searching for more of my
                    thoughts, I would selfishly love to get questions about it.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.spotify.com/show/1KSBccSgATuIUOnLgAtU9y?si=91250cb5c73f4516"
                        variant="article"
                    >
                        <Emoji icon="📚" /> The Anxious Generation by Jonathan
                        Haidt
                    </UrlBadge>{' '}
                    has been an interesting ongoing read for me. I would
                    recommend it for anyone curious about how childhoods have
                    been affected by shifts in parenting and emerging social
                    media over the last few decades.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Go forth and ask interesting questions
                </Text>
                <Callout variant="base">
                    Do you think you could successfully manipulate a perfect
                    clone of yourself?
                </Callout>
                <Callout variant="base">
                    If you had to permanently give up one of your senses, which
                    one would it be?
                </Callout>
            </Section>
        </>
    );
};

export { EmailContent009 };

import { Em, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';
import { Callout } from '@/app/(components)/callout';

const EmailContent008 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again friends</Text>
                <Text variant="base">
                    Hola amigos, I&apos;m back with another whirl of whimsy. I
                    slacked, but we&apos;re simply so back. My brother and my
                    bestest friend both left Calgary for new adventures
                    recently, so I&apos;ve been a bit sad. The good kind of sad
                    though.{' '}
                    <Em>&quot;What is grief, if not evidence of love?&quot;</Em>{' '}
                    and whatnot. Needless to say, I&apos;ve been especially
                    somber as of late. Let&apos;s explore my psyche together,
                    shall we?
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    I&apos;m kinda bad at wanting things
                </Text>
                <Text variant="base">
                    I&apos;m in a weird situationship with my desire. On one
                    hand I ignore its asks and resist sacrificing for it. On the
                    other, it refuses to articulate itself and contradictions
                    stack up quickly when it does.{' '}
                    <Em>
                        I don&apos;t really know why I want so many
                        contradictory things.
                    </Em>{' '}
                </Text>
                <Text variant="base">
                    I&apos;ve recently been thinking of &quot;wanting&quot; as a
                    skill to be practiced. And I worry that I&apos;ve let that
                    muscle atrophy a little. Wanting things, properly, is
                    difficult & vulnerable for me. It exposes who I am and I
                    struggle with some resistance to that. I&apos;m not entirely
                    sure how to train this muscle, but I think it&apos;s a
                    worthwhile pursuit.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Constantly watched, easily embarrassed
                </Text>
                <Text variant="base">
                    Do we live in a digital surveillance state? Between the
                    permanence of recorded media, the rise of cringe culture, &
                    performative <Em>everything</Em>, I feel as though I&apos;m
                    being watched even when I&apos;m not. I mentioned this idea
                    to my friend <Em>D</Em> & she noted that people seem much
                    more easily embarrassed than they used to be. Candidly, this
                    feels true for me too.
                </Text>
                <Text variant="base">
                    I don&apos;t even have much more to comment. I perceive a
                    strangely persistent observation of my actions, and anything
                    remotely interesting about my life requires overcoming it. I
                    suppose this is me announcing a new side quest for myself.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.spotify.com/show/6mlVrVyIYd7WmBnEekAAhl"
                        variant="article"
                    >
                        <Emoji icon="📚" /> Surrounded by idiots
                    </UrlBadge>{' '}
                    is a book I read recently. It&apos;s an interesting
                    framework for personality, and I feel as though I learned to
                    have more grace after reading it.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.spotify.com/track/2NjHlLS4KCChsfJPcR4jzd?si=a67a8f6d921940f8"
                        variant="media"
                    >
                        <Emoji icon="🎵" /> Look too easy - Graham
                    </UrlBadge>{' '}
                    is a great song. I have had it on repeat a probably too much
                    recently.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.youtube.com/watch?v=2E4G8kLAR_k"
                        variant="media"
                    >
                        <Emoji icon="🎬" /> The Hidden Structure in Magic That
                        Created the Archetypes
                    </UrlBadge>{' '}
                    is a video about <Em>Magic: The Gathering</Em> that is
                    secretly just game design theory. In general this podcast
                    analyzes <Em>Magic</Em> through the lens of broader game
                    design and if that&apos;s your kind of nerd then I would
                    highly recommend.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.issendai.com/psychology/estrangement/missing-missing-reasons.html"
                        variant="site"
                    >
                        <Emoji icon="📎" /> The Missing Missing Reasons
                    </UrlBadge>{' '}
                    is an essay about estrangement and the differing
                    perspectives of estranged parents and estranged children.
                    It&apos;s a little hopeless in its tone, so I struggle to
                    fully resonate with it, but I think it&apos;s an interesting
                    topic explored well here.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Go forth and ask interesting questions
                </Text>
                <Callout variant="base">
                    If you could read any one person&apos;s mind for an hour,
                    who are you picking and what are you digging for?
                </Callout>
                <Callout variant="base">
                    If you had to make a sticker pack to describe your life,
                    what would it look like?
                </Callout>
            </Section>
        </>
    );
};

export { EmailContent008 };

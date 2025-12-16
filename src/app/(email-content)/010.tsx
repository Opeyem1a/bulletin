import { Em, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';
import { Callout } from '@/app/(components)/callout';
import { List } from '@/app/(components)/list';

const EmailContent010 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again</Text>
                <Text variant="base">
                    Hey. I&apos;ve resolved to stop apologizing for breaks.
                    Instead, I am relieved to write again. I especially eager to
                    turn this into a more collaborative space, so please do send
                    me topics or even sections of your writing you&apos;d like
                    to contribute! I am yearning for new things to ponder. Also,
                    I got to work on{' '}
                    <UrlBadge
                        url="https://whatdoyouthink.vercel.app"
                        variant="site"
                    >
                        something to ask
                    </UrlBadge>{' '}
                    more recently, and it felt really good to improve it and
                    fall in love with my craft again. I worked hard on it and it
                    would mean a lot to me if you checked it out, especially if
                    you have curious questions to contribute.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">When art sees you</Text>
                <Text variant="base">
                    I&apos;ve been deep in a new comic I picked up recently.
                    It&apos;s a wonderfully written story about complex
                    relationships and persistent honesty. I feel cathartic and
                    feet-kicky and warm reading it, but also somewhat guilty. I
                    look inward at my internal world and I&apos;m honestly a
                    little embarrassed by my resistance to living the
                    experiences I so readily resonate with in art. To an extent,
                    I engage with art to be <Em>seen</Em>, and its piercing
                    observation soothes, compels, and convicts.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">An ode to unopened letters</Text>
                <Text variant="base">
                    I think I&apos;ve mentioned before that one of my closest
                    friends recently moved away. Months before this, on their
                    birthday, I wrote them a card. It&apos;s a running joke
                    between us that when we start being sappy we devolve into
                    crying messes so in mild jest, they procrastinated reading
                    it, sure that they would break down if they did. As time wnt
                    on, the emotional weight of that card grew for both of us,
                    and when they moved, this only escalated.
                </Text>
                <Text variant="base">
                    Candidly, I don&apos;t remember what I wrote in that card,
                    and it might even be entirely generic birthday wishes. I
                    also don&apos;t know if they&apos;ve read it yet. What I
                    find beautiful about life is that an unopened letter can
                    express such deep affection, detached from its contents. I
                    can think of no better symbol for this particular friendship
                    than that the mere threat of unfiltered emotional expression
                    is enough to provoke a smile.
                </Text>
                <Text variant="base">
                    <Em>P.S. I hope life is lovely, N</Em>.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Frameworks for connection-building games
                </Text>
                <Text variant="base">
                    I&apos;ve been trying to make a board game that somehow
                    makes strangers friends and friends closer. It&apos;s a fun
                    design challenge and I wanted to share some thoughts on it
                    thus far.
                </Text>
                <Text variant="base">
                    My first constraint is that I want it to actually,
                    functionally, <Em>be a game</Em>. I find that it is quite
                    easy to design connection-oriented games more like exercises
                    (i.e. here is a list of questions to ask each other). I want
                    there to be strategy, competition, and have the connection
                    aspects just be an unavoidable byproduct. This also means I
                    needed to consider what each player would be doing at all
                    times, and try to make those actions fun to do.
                </Text>
                <Text variant="base">
                    Another interesting framework I&apos;ve bumped into is a
                    loose taxonomy of group types for connection-oriented games.
                    I have been thinking about the following four types:
                    <List
                        ordered={false}
                        items={[
                            'All friends',
                            'All strangers',
                            'Mostly friends, some strangers',
                            'Mostly strangers, some friends',
                        ]}
                    />
                    The last 2 were the most compelling to me because of how
                    these dynamics can specifically affect social games. I also
                    have a separate spectrum for how interested each person is
                    in the game itself versus the social connection aspect.
                    Combining these two frameworks has given me a better basis
                    for decision making during the design process.
                </Text>
                <Text variant="base">
                    I won&apos;t ramble too much here, but if you have any
                    thoughts in this vein, I would love to chat.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge url="https://www.folllit.com/" variant="site">
                        <Emoji icon="🌐" /> Folllit
                    </UrlBadge>{' '}
                    is a cute website that makes you draw a smiley face to
                    enter.
                </Text>
                <Text variant="base">
                    <UrlBadge url="https://www.dfos.com/" variant="site">
                        <Emoji icon="🌐" /> Dark Forest OS
                    </UrlBadge>{' '}
                    is a compelling concept from Metalabel. The website is cool,
                    but I also really resonate with the notion of private
                    corners of the internet leveraged for intentional community
                    formation. I suppose <Em>Something Lovely</Em> is a dark
                    forest of sorts too.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://themonolithproject.net/"
                        variant="site"
                    >
                        <Emoji icon="🌐" /> The Monolith Project
                    </UrlBadge>{' '}
                    is a website that feels like an indie game. It&apos;s
                    beautiful.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.youtube.com/watch?v=lne5-UN8yuw"
                        variant="music"
                    >
                        <Emoji icon="🎵" /> Got to be real - Mary J. Blige &
                        Will Smith
                    </UrlBadge>{' '}
                    is simply a great song and it is devastatingly not on
                    Spotify.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.instagram.com/p/DSDapitD7rk/"
                        variant="article"
                    >
                        <Emoji icon="📎" /> [The Great Friendship Flattening]
                    </UrlBadge>{' '}
                    is an interesting video about an article discussing how even
                    our real friendships can take on parasocial properties via
                    social media (See{' '}
                    <a
                        href="https://www.theatlantic.com/family/2025/10/social-media-relationships-parasocial/684551/"
                        target="_blank"
                    >
                        original article - paywalled
                    </a>
                    ).
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Here are some questions that scare me
                </Text>
                <Callout variant="base">
                    If your fulfillment required undoing everything in your
                    current lifestyle, would you do it?
                </Callout>
                <Callout variant="base">
                    Why does being yourself feel like it requires effort?
                </Callout>
                <Callout variant="base">
                    What is the scariest thing you could find out about
                    yourself?
                </Callout>
            </Section>
        </>
    );
};

export { EmailContent010 };

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
    vibe: 'relieved to be writing again',
    colors: ['#FF8A6B', '#FFC46B', '#FFE9C7', '#F2637E'],
    content: (
        <>
            <Section>
                <Heading>Hello again</Heading>
                <Paragraph>
                    Hey. I've resolved to stop apologizing for breaks. Instead,
                    I am relieved to write again. I'm especially eager to turn
                    this into a more collaborative space, so please do send me
                    topics or even sections of your writing you'd like to
                    contribute! I am yearning for new things to ponder. Also, I
                    got to work on{' '}
                    <Link href="https://whatdoyouthink.vercel.app">
                        something to ask
                    </Link>{' '}
                    more recently, and it felt really good to improve it and
                    fall in love with my craft again. I worked hard on it and it
                    would mean a lot to me if you checked it out, especially if
                    you have curious questions to contribute.
                </Paragraph>
            </Section>
            <Section>
                <Heading>When art sees you</Heading>
                <Paragraph>
                    I've been deep in a new comic I picked up recently. It's a
                    wonderfully written story about complex relationships and
                    persistent honesty. I feel cathartic and feet-kicky and warm
                    reading it, but also somewhat guilty. I look inward at my
                    internal world and I'm honestly a little embarrassed by my
                    resistance to living the experiences I so readily resonate
                    with in art. To an extent, I engage with art to be{' '}
                    <Em>seen</Em>, and its piercing observation soothes,
                    compels, and convicts.
                </Paragraph>
            </Section>
            <Section>
                <Heading>An ode to unopened letters</Heading>
                <Paragraph>
                    I think I've mentioned before that one of my closest friends
                    recently moved away. Months before this, on their birthday,
                    I wrote them a card. It's a running joke between us that
                    when we start being sappy we devolve into crying messes so
                    in mild jest, they procrastinated reading it, sure that they
                    would break down if they did. As time went on, the emotional
                    weight of that card grew for both of us, and when they
                    moved, this only escalated.
                </Paragraph>
                <Paragraph>
                    Candidly, I don't remember what I wrote in that card, and it
                    might even be entirely generic birthday wishes. I also don't
                    know if they've read it yet. What I find beautiful about
                    life is that an unopened letter can express such deep
                    affection, detached from its contents. I can think of no
                    better symbol for this particular friendship than that the
                    mere threat of unfiltered emotional expression is enough to
                    provoke a smile.
                </Paragraph>
                <Paragraph>
                    <Aside>P.S. I hope life is lovely, N.</Aside>
                </Paragraph>
            </Section>
            <Section>
                <Heading>Frameworks for connection-building games</Heading>
                <Paragraph>
                    I've been trying to make a board game that somehow makes
                    strangers friends and friends closer. It's a fun design
                    challenge and I wanted to share some thoughts on it thus
                    far.
                </Paragraph>
                <Paragraph>
                    My first constraint is that I want it to actually,
                    functionally, <Em>be a game</Em>. I find that it is quite
                    easy to design connection-oriented games more like
                    exercises. I want there to be strategy, competition, and
                    have the connection aspects just be an unavoidable
                    byproduct. This also means I needed to consider what each
                    player would be doing at all times, and try to make those
                    actions fun to do.
                </Paragraph>
                <Paragraph>
                    Another interesting framework I've bumped into is a loose
                    taxonomy of group types for connection-oriented games: all
                    friends, all strangers, mostly friends with some strangers,
                    and mostly strangers with some friends. The last two were
                    the most compelling to me because of how these dynamics can
                    specifically affect social games. I also have a separate
                    spectrum for how interested each person is in the game
                    itself versus the social connection aspect. Combining these
                    two frameworks has given me a better basis for decision
                    making during the design process.
                </Paragraph>
                <Paragraph>
                    I won't ramble too much here, but if you have any thoughts
                    in this vein, I would love to chat.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    <FoundItem url="https://www.folllit.com/" title="Folllit">
                        A cute website that makes you draw a smiley face to
                        enter.
                    </FoundItem>
                    <FoundItem
                        url="https://www.dfos.com/"
                        title="Dark Forest OS"
                    >
                        A compelling concept from Metalabel: private corners of
                        the internet, used for intentional community. I suppose
                        something lovely is a dark forest of sorts too.
                    </FoundItem>
                    <FoundItem
                        url="https://themonolithproject.net/"
                        title="The Monolith Project"
                    >
                        A website that feels like an indie game. It's beautiful.
                    </FoundItem>
                    <FoundItem
                        url="https://www.youtube.com/watch?v=lne5-UN8yuw"
                        title="Got to Be Real"
                    >
                        Mary J. Blige &amp; Will Smith. Simply a great song, and
                        devastatingly not on Spotify.
                    </FoundItem>
                    <FoundItem
                        url="https://www.instagram.com/p/DSDapitD7rk/"
                        title="The Great Friendship Flattening"
                    >
                        A video on how even our real friendships can take on
                        parasocial properties via social media.{' '}
                        <Link href="https://www.theatlantic.com/family/2025/10/social-media-relationships-parasocial/684551/">
                            Original article
                        </Link>{' '}
                        (paywalled).
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

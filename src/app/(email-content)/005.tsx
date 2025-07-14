import { Aside, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';
import { List } from '@/app/(components)/list';

const EmailContent005 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again friends</Text>
                <Text variant="base">
                    Writing this issue with{' '}
                    <UrlBadge
                        url="https://github.com/Opeyem1a/bulletin"
                        variant="site"
                    >
                        bulletin
                    </UrlBadge>{' '}
                    has been much nicer, I&apos;m glad I went that route. Life
                    is great, & I have new ponders for you today. Welcome back
                    to &quot;how long will Opey do this before caving and making
                    a Substack?&quot;
                </Text>
                <Text variant="aside">
                    <i>
                        P.S. Much of this issue is me passing on recommendations
                        and thoughts from my lovely friends. I&apos;ve
                        referenced them by first initial in case they don&apos;t
                        want to be put on blast, but let it be known that I
                        appreciate them each very much.
                    </i>
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Ad breaks are kind of lovely</Text>
                <Text variant="base">
                    My friend C addressed the movie night crew about her Netflix
                    subscription:{' '}
                    <i>
                        &quot;there are ads but that just gives us time to
                        talk&quot;
                    </i>{' '}
                    (or something like that). It made me think about how I used
                    to perceive ad breaks. Running to the bathroom to make it
                    back in time, sneaking into the kitchen to grab a snack,
                    unpacking something from the show with my friends in the
                    living room. As I reminisced, I realized how much I had
                    missed this, and how weird it is that I might be apart of
                    the last generation to experience it.
                </Text>
                <Text variant="base">
                    It also got me thinking about personal agency. With ad
                    breaks, I only gave big screens my partial attention. I
                    couldn&apos;t spend an entire evening watching a show
                    because the channel would eventually stop playing its
                    episodes. If a movie was going to end at 7pm and I missed 15
                    minutes of it, the movie would still end at 7pm. I
                    didn&apos;t experience the mild guilt of sitting still for
                    hours in front of my TV, and I&apos;m confident my screen
                    time was lower, too. Strangely, when I had less control over
                    the when and what of the media I consumed, it felt like I
                    had more freedom.
                </Text>
                <Text variant="aside">
                    <Aside>(Thank you C for inspiring this)</Aside>
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Rebuilding my attention</Text>
                <Text variant="base">
                    Here is a random list of challenges I found to rebuild
                    attention. Most of these were snatched from{' '}
                    <a
                        href="https://www.instagram.com/p/DINH7QrtRWO/"
                        target="_blank"
                    >
                        this reel
                    </a>
                    . I&apos;m going to try these this week!
                    <List
                        ordered={false}
                        items={[
                            <>
                                Look at yourself in the mirror for 30 minutes
                                uninterrupted
                            </>,
                            <>Go out to dinner alone</>,
                            <>Write whatever comes to mind for 1 hour</>,
                        ]}
                    />
                </Text>
                <Text variant="base">
                    Unrelated but equally cool reels include{' '}
                    <a
                        href="https://www.instagram.com/p/DL281qBxuYe/"
                        target="_blank"
                    >
                        this one
                    </a>{' '}
                    &{' '}
                    <a
                        href="https://www.instagram.com/p/DLjCsh6scAr/"
                        target="_blank"
                    >
                        this other one
                    </a>
                    . Can you tell my screen time has been high lately?
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://datagubbe.se/usab2/"
                        variant="article"
                    >
                        <Emoji icon="📎" /> The Decline of Usability: Revisited
                    </UrlBadge>{' '}
                    is a good read about the concept of UX and how modern
                    software holds up to its principles.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://tabularasarecords.substack.com/p/you-are-not-owed-a-creative-career"
                        variant="article"
                    >
                        <Emoji icon="📎" /> You are not owed a creative career
                    </UrlBadge>{' '}
                    reflects on the pursuit of creativity as one&apos;s job &
                    the complexities that fall around that. It was quite a
                    fascinating read for me.{' '}
                    <Aside>(Thanks E for showing me this)</Aside>
                </Text>
                <Text variant="base">
                    <UrlBadge url="https://making.today/" variant="site">
                        <Emoji icon="🌐" /> making.today
                    </UrlBadge>{' '}
                    seems like a cool productivity tool (I am a SaaS nerd).
                    Haven&apos;t tried it myself yet but it&apos;s on my radar{' '}
                    <Emoji icon="👀" />.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.thiings.co/things"
                        variant="site"
                    >
                        <Emoji icon="🌐" /> thiings
                    </UrlBadge>{' '}
                    has 3D images of things, that is the entire purpose, it
                    seems.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.dear-data.com/theproject"
                        variant="site"
                    >
                        <Emoji icon="🌐" /> Dear data
                    </UrlBadge>{' '}
                    is an adorable project where 2 people became pen pals by
                    finding artistic ways to record data about their lives and
                    mailing them to each other. Definitely worth checking out.{' '}
                    <Aside>(Thanks J for showing me this)</Aside>
                </Text>
            </Section>
        </>
    );
};

export { EmailContent005 };

import { Aside, Em, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';
import { Callout } from '@/app/(components)/callout';

const EmailContent007 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again friends</Text>
                <Text variant="base">
                    I&apos;ve been in a bit of a funk honestly{' '}
                    <Em>
                        (if that wasn&apos;t evident from my delay in writing
                        this)
                    </Em>
                    , and I suspect it&apos;s because I&apos;m trying to
                    overclock the &quot;makes software product&quot; part of my
                    brain for work and fun. I think my next set of quests
                    <Emoji icon="™️" /> might need to not be software. The new
                    side project I mentioned from before might end up being the
                    kind of thing that gets printed out, instead of deployed
                    online if you&apos;re picking up what I&apos;m putting down.
                    Oh, and dating is intriguing, I&apos;ve learned lots about
                    life & myself. I went on a super feet-kicky date too and
                    that was cute.
                </Text>
                <Text variant="base">
                    Anyway, vulnerability and such aside, let&apos;s unshackle
                    the horrors that have been trapped in my imagination for the
                    past few weeks.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Imagine trying</Text>
                <Text variant="base">
                    I truly love it when people try. Someone once told me that
                    inspiration is perishable, and watching people just refuse
                    to let their inspiration go unaddressed triggers a deep
                    motivation in me. It&apos;s inspiring to see someone with
                    the patience and tenacity required to take a vision to the
                    finish line. I find that the average person in general just
                    doesn&apos;t particularly try. They work, yes, but working
                    and trying feel like different concepts to me. Working is
                    what one does, measured in effort spent. Trying, to me, is
                    directed effort, measured in velocity. Trying is tediously
                    choosing to take an active role in one&apos;s life; to be in
                    the driver&apos;s seat; to play life in first-player mode. I
                    aspire to try.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">What I choose to make things mean?</Text>
                <Text variant="base">
                    I scratched up my car recently. A real chipped paint and
                    dented door combo. Big yikes, I know. It wasn&apos;t even a
                    cool story, I just took too tight of a corner around too
                    concrete of a pillar in too small of a parkade. My first
                    response here was a <Emoji icon={`😬`} />. So while I was
                    letting that simmer for a few minutes at low heat, I
                    remembered a video I watched some time ago.
                </Text>
                <Text variant="base">
                    The video&apos;s main premise was about being very
                    intentional about the conclusions one draw from information.
                    The video called this &quot;what we choose to make things
                    mean&quot;. <Em>Apophenia</Em> is the tendency to perceive a
                    connection or meaningful pattern between unrelated or random
                    things, and it&apos;s a phenomenon I&apos;m personally quite
                    prone to. My impulse in that parkade after scratching my car
                    was &quot;I&apos;m a bad driver&quot;, and perhaps I am, but
                    why should my experience lead to this result? Literally
                    speaking, I made a poor choice in a brief moment that
                    resulted in no damage to anyone but myself. To assign any
                    more meaning to it than that would demand
                    justification.{' '}
                </Text>
                <Aside>
                    This message is sponsored by Opey&apos; Auto Body Repairs.
                    Call for a free quote today.
                </Aside>
                <Text variant="base">
                    This extends to more than just car scratches. I&apos;ve
                    jumped from &quot;I like them&quot; to &quot;I should be
                    with them&quot;. From &quot;this specific person thinks I
                    did this poorly&quot; to &quot;I did that poorly&quot;. From
                    &quot;this task is hard&quot; to &quot;I am bad at this
                    task&quot;. I&apos;ve learned that there is a peace that
                    comes from direct observation. To note the difference
                    between what I <Em>made</Em> something mean and what it
                    truly represented. Or maybe I&apos;m just currently making
                    my experience of watching a video into a philosophical
                    treatise. Curious what you think.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge url="https://www.igloo.inc/" variant="site">
                        <Emoji icon="🌐" /> igloo.inc
                    </UrlBadge>{' '}
                    is a hardcore website experience. Someone with an intimate
                    knowledge of 3D and shaders cooked here, and it&apos;s
                    awesome. Even the loading animation at the beginning is
                    cool.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.npmjs.com/package/itap-cli-demo"
                        variant="site"
                    >
                        <Emoji icon="👀" /> itap
                    </UrlBadge>{' '}
                    (&quot;is there a package&quot;) is cool CLI-based NPM
                    package finder built by my guy R. He cooked here, would
                    recommend you check it out.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://pudding.cool/2025/06/hello-stranger/"
                        variant="article"
                    >
                        <Emoji icon="📎" /> hello stranger
                    </UrlBadge>{' '}
                    is a fascinating visual article + data visualization project
                    based around getting strangers to talk to each other for 30
                    minutes. Website is cool, idea is cooler.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.instagram.com/p/DM2wB9COK3a/"
                        variant="site"
                    >
                        <Emoji icon="📎" /> Content diets
                    </UrlBadge>{' '}
                    is a reel comparing dieting culture&apos;s response to
                    overabundance in food to content curation&apos;s response to
                    overabundance in information. Was an interesting short
                    watch.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://letters.thedankoe.com/p/youre-not-depressed-you-just-dont"
                        variant="article"
                    >
                        <Emoji icon="📎" /> You&apos;re not broken, you just
                        don&apos;t have a quest
                    </UrlBadge>{' '}
                    is an intriguing essay on creating &quot;quests&quot; in
                    one&apos;s life to increase agency and fulfillment. Would
                    recommend.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://youtu.be/aPhrTOg1RUk?si=GsT3iyDpWU0lc26D"
                        variant="article"
                    >
                        <Emoji icon="📎" /> Envy
                    </UrlBadge>{' '}
                    is video essay about envy in the modern age and explores the
                    philosophical history of it. Was quite intriguing in
                    general. <Aside>(Thanks E for putting me onto this)</Aside>.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">
                    Go forth and ask interesting questions
                </Text>
                <Text variant="base">
                    Curious to hear your answers to these! Also if you ask other
                    people these I&apos;d love to hear their answers too.
                    <Callout variant="base">
                        What is the youngest and oldest you think you could
                        convince a stranger that you are?
                    </Callout>
                    <Callout variant="base">
                        If we switched lives for a day, what do you think
                        I&apos;d struggle with most?
                    </Callout>
                </Text>
            </Section>
        </>
    );
};

export { EmailContent007 };

import { Text } from '@/app/(components)/text';
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
                    Some tldr on my life before we indulge in the usual antics.
                    I&apos;ve been in a bit of a funk honestly, and I suspect
                    it&apos;s because I&apos;m trying to overclock the
                    &quot;makes software product&quot; part of my brain for work
                    and fun. I think my next set of things
                    <Emoji icon="™️" /> might need to be not software. The new
                    side project I mentioned from before might end up being the
                    kind of thing that gets printed out, instead of deployed
                    online. I&apos;ll keep you in the loop. Oh, and dating is
                    intriguing, I&apos;ve learned lots about life & myself.
                </Text>
                <Text variant="base">
                    Anyway, vulnerability and such aside, let&apos;s unshackle
                    the horrors that have been trapped in my imagination for the
                    past few weeks.
                </Text>
            </Section>
            <Spacer height="16px" />
            <Section>
                <Text variant="header">It&apos;s so cool when people try</Text>
                <Text variant="base">
                    I truly love it when people try. It&apos;s inspiring to see
                    someone with the patience and tenacity required to steward a
                    vision to completion. Someone once told me that inspiration
                    is perishable, and watching those who tirelessly refuse to
                    let their inspiration go unaddressed sparks a deep
                    motivation in me too. I find that the average person in
                    general just doesn&apos;t particularly try. They work, yes,
                    but working and trying feel like different concepts to me.
                    Working is what one does, measured in effort spent. Trying,
                    to me, is directed effort, measured in velocity. Trying is
                    choosing, tediously, to take an active role in one&apos;s
                    life. I aspire to try.
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
                    response here was a clear <Emoji icon={`😬`} />. So we let
                    that simmer for a few minutes at low heat, and it reminded
                    me of a video I had watched some time ago.
                </Text>
                <Text variant="base">
                    The video&apos;s main premise was about being very
                    intentional about the conclusions we draw from information.
                    The video called this &quot;what we choose to make things
                    mean&quot;. <i>Apophenia</i> is the tendency to perceive a
                    connection or meaningful pattern between unrelated or random
                    things, and it&apos;s a phenomenon I&apos;m personally quite
                    prone to. My impulse in that parkade after scratching my car
                    was &quot;I&apos;m a bad driver&quot;, but why does that
                    experience lead to this result? Literally speaking, I made a
                    poor choice in a brief moment that resulted in no damage to
                    anyone but myself. To assign any more meaning to it than
                    that would demand justification.
                </Text>
                <Text variant="base">
                    This extends to more than just car scratches. I&apos;ve
                    jumped from &quot;I like them&quot; to &quot;I should be
                    with them&quot;. From &quot;this specific person thinks I
                    did this poorly&quot; to &quot;I did that poorly&quot;. From
                    &quot;this task is hard&quot; to &quot;I am bad at this
                    task&quot;. There is a pervasive peace that comes from
                    direct observation. To note the difference between what I{' '}
                    <i>made</i> something mean and what it truly represented. Or
                    maybe I&apos;m making my experience of watching a video into
                    a philosophical treatise. Curious what you think.
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
                        <Emoji icon="🌐" /> Content diets
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

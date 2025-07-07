import { Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { List } from '@/app/(components)/list';
import { UrlBadge } from '@/app/(components)/url-badge';
import { getEditionName } from '@/app/(config)/helpers';
import { NAME } from '@/app/(config)/constants';
import { Emoji } from '@/app/(components)/emoji';

const EmailContent004 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Running it back</Text>
                <Text variant="base">
                    And we&apos;re back in the studio. Hope you enjoy the new
                    visual style, I will likely keep randomly changing and
                    tweaking it because it sparks joy. Also, a few people have
                    mentioned wanting to guest write sections for <i>{NAME}</i>,
                    and if you do, let me know and we can set something up! Life
                    is great, the sun is shining, friends are returning to
                    Calgary for summer visits - it&apos;s time for{' '}
                    {getEditionName(4)}.
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">
                    Don&apos;t (always) do your own research
                </Text>
                <Text variant="base">
                    Okay hear me out. I&apos;m learning that the experience of
                    being taught is quite community-building. As in the process
                    of not knowing something, acknowledging that, requesting
                    knowledge from others, and then receiving that knowledge has
                    been a bonding experience in my life.
                </Text>
                <Text variant="base">
                    We have seemingly infinite access to information through the
                    internet, but I worry that overusing it robs us of community
                    teaching. I know I can easily Google why wisdom teeth need
                    to get removed, for example, but why not ask my community?
                    Why not reconnect with old acquaintances who would leap at
                    the opportunity to chat about their area of expertise? We
                    can always validate community answers with the internet
                    later, but if we scratch the curiousity itch immediately,
                    then we&apos;ll never turn to our communities at all.
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Chronicles of curiousity</Text>
                <Text variant="base">
                    I&apos;m in the business of pursuing whimsy, curiousity, and
                    wonder. This typically manifests as side questing.
                    Here&apos;s a quick summary of the side quests I&apos;ve
                    been on and where they led me:
                </Text>
                <List
                    ordered={true}
                    items={[
                        <>
                            I started taking pictures of things I see in real
                            life that give me design inspiration and now I have
                            a juicy side project lined up (secret for now but
                            I&apos;ll tell you if you ask &#129323;)
                        </>,
                        <>
                            I saw a group of strangers wearing matching outfits
                            at a bubble tea spot and got nosy. I asked them what
                            the occasion was and found out they were a church
                            youth group. Pulled up to their church 2 days later
                            + invited my brother and his friends. Very
                            community-maxed day.
                        </>,
                        <>
                            I have been on the hunt for good cafes to work in
                            Calgary. By telling people this, I have been
                            recommended way more great spots and I have a few
                            go-tos already!
                        </>,
                    ]}
                />
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://dansinker.com/posts/2025-05-23-who-cares/"
                        variant="article"
                    >
                        <Emoji icon="🌐" /> The who cares era
                    </UrlBadge>{' '}
                    is a great little essay about the importance of caring in a
                    world where people seem to only optimize.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://stephango.com/self-guarantee"
                        variant="article"
                    >
                        <Emoji icon="🌐" /> Self-guaranteeing promises
                    </UrlBadge>{' '}
                    is a short writing about an interesting concept. How do we
                    make promises through products and experiences that do not
                    require consumer trust?
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://maalvika.substack.com/p/being-too-ambitious-is-a-clever-form"
                        variant="article"
                    >
                        <Emoji icon="🌐" /> Being too ambitious is a clever form
                        of self-sabotage
                    </UrlBadge>{' '}
                    talks about how the pursuit of perfection is
                    counter-productive to creativity and progress.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.spotify.com/track/523Ml5c5S1iMqZ5ICaJwC5?si=e37e12c8f89c418a"
                        variant="music"
                    >
                        <Emoji icon="🎵" /> Bbadabada by POODEE
                    </UrlBadge>{' '}
                    is simply a great beat and you should listen to it and tell
                    me it&apos;s great.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.spotify.com/track/3jXwRo4SLzhC1xJswxmXEO?si=56b86a4d0ef34e69"
                        variant="music"
                    >
                        <Emoji icon="🎵" /> Stand Firm, You&apos;ll Win by Alex
                        Jean
                    </UrlBadge>{' '}
                    is another great song but how he get his voice to sound like
                    that?
                </Text>
            </Section>
        </>
    );
};

export { EmailContent004 };

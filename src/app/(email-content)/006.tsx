import { Aside, Text } from '@/app/(components)/text';
import { Section } from '@/app/(components)/section';
import { Spacer } from '@/app/(components)/spacer';
import { UrlBadge } from '@/app/(components)/url-badge';
import { Emoji } from '@/app/(components)/emoji';

const EmailContent006 = () => {
    return (
        <>
            <Section>
                <Text variant="header">Hello again friends</Text>
                <Text variant="base">
                    Howdy, I&apos;m back with some more tailored silliness.
                    Before that though, here&apos;s the tldr on my life. Online
                    dating is a strange experience for me, a new side project
                    has captivated my attention (please ask, I&apos;m dying to
                    yap), and I am quickly becoming a D1 Substack glazer. With
                    that aside, let&apos;s get into our main dishes.
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">
                    Start an inspiration folder, it&apos;s great
                </Text>
                <Text variant="base">
                    I have rediscovered the joys of keeping an inspiration
                    folder. Aren&apos;t they delightful? Portals to
                    manifestations of my imagination. Tapestries of projects yet
                    to be. They spark such joy in their simplicity - breadcrumbs
                    of an epiphany waiting to happen. I now keep track of
                    sentences that resonate, art that speaks, products that
                    delight. And it works! No matter how lost I am at the
                    beginning of a project, some scrolls through my various
                    inspiration folders always get me back on track. I would
                    highly highly highly recommend it.
                </Text>
                <Text variant="base">
                    If you have a folder like this, I would love to see it btw.
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">What one does with a blank cheque</Text>
                <Text variant="base">
                    What <i>would</i> I do with a blank cheque? The answer feels
                    obvious (yes please infinite money?), and yet I&apos;ve been
                    contending with what my answer (or my lack of one) might
                    imply about my motivations, my journey, and my path.
                </Text>
                <Text variant="base">
                    Initially I connected the clarity around what one would do
                    with a blank cheque to their clarity around their goals
                    (financially). Someone who wants to be financially
                    independent and has done the calculations to know how much
                    that would cost and where that capital would need to be
                    deployed would likely know almost the exact number they
                    would write on that cheque, right? This sort of person would
                    likely already have considered how this influx of wealth
                    might change their lifestyle, views, and relationships. They
                    would be prepared for it, even.
                </Text>
                <Text variant="base">
                    When generalized, the &quot;blank cheque&quot; hypothetical
                    refers to when an opportunity with high potential returns
                    can only be effectively leveraged through deliberate action.
                    Growing up, my dad always said that luck was just a
                    combination of preparation and opportunity, and I think the
                    idea of &quot;blank cheques&quot; resonates with that
                    perspective. I am reminded of mentors who offered to teach
                    me, old acquaintances who offered to grow closer me, and
                    projects that offered to enrich and engage me. All
                    &quot;blank cheques&quot; in their own way, all cashed out
                    with mixed success. I&apos;ve started paying more attention
                    to these occurrences in my life. I find that my directional
                    clarity guides the quality of my execution and I take people
                    up more on their offers when I know what I want. I want to
                    live a life where no blank cheque is wasted.
                </Text>
            </Section>
            <Spacer height="24px" />
            <Section>
                <Text variant="header">Hey these were interesting</Text>
                <Text variant="base">
                    <UrlBadge url="https://www.shrump.cam/" variant="site">
                        <Emoji icon="🌐" /> shrump.cam
                    </UrlBadge>{' '}
                    is massively ridiculous and exactly what software makers
                    should be getting up to more often. I&apos;ll let you
                    experience it yourself - use a laptop/desktop.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://maalvika.substack.com/p/compression-culture-is-making-you"
                        variant="article"
                    >
                        <Emoji icon="📎" /> Compression culture is making you
                        stupid and uninteresting
                    </UrlBadge>{' '}
                    is a phenomenal essay. I would give a summary, but that
                    would kind of defeat the point. I think it&apos;s paywalled
                    now, but I&apos;ll link it here in case it opens up again
                    sometime.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://open.substack.com/pub/thedankoe/p/you-dont-need-a-niche-you-need-a?utm_source=share&utm_medium=android&r=x5s5s"
                        variant="article"
                    >
                        <Emoji icon="📎" /> You don&apos;t need a niche, you
                        need a point of view
                    </UrlBadge>{' '}
                    puts this thought into words really well. I like the framing
                    of what actually drives interesting self-expression, and how
                    it already exists in everyone&apos;s unique lens.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://www.wix.com/studio/design/inspiration/blendmode"
                        variant="site"
                    >
                        <Emoji icon="🌐" /> Digital fatigue
                    </UrlBadge>{' '}
                    is a cool website, kinda silly and I would recommend
                    checking it out.
                </Text>
                <Text variant="base">
                    <UrlBadge
                        url="https://jedpinko.substack.com/p/hold-my-breath-2eb?r=5sjjul&utm_campaign=post&utm_medium=web&triedRedirect=true"
                        variant="article"
                    >
                        <Emoji icon="📎" /> hold MY breath
                    </UrlBadge>{' '}
                    is a piece of art, made my an amazing artist and friend. It
                    speaks to turbulent experiences and I found it cathartic to
                    read. <Aside>(Thanks for being you, J)</Aside>
                </Text>
            </Section>
        </>
    );
};

export { EmailContent006 };

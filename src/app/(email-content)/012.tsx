import { Section } from '@/app/(components)/section';
import {
    Aside,
    Em,
    Heading,
    Highlight,
    Paragraph,
    Struck,
} from '@/app/(components)/text';
import { FoundItem, FoundList } from '@/app/(components)/found';
import { Question } from '@/app/(components)/question';
import { Edition } from '@/utils/types';

const edition012: Edition = {
    number: 12,
    vibe: 'Wondering, wandering',
    colors: ['#FFA3A3', '#B48CF2'],
    content: (
        <>
            <Section>
                <Heading>To wonder, to wander</Heading>
                <Paragraph>
                    I've been captivated by the relationship between beauty,
                    utility, art, and science. I believe they are so much more
                    interwoven than I've ever given them credit for. The
                    connections are beautiful.
                </Paragraph>
                <Paragraph>
                    For the unsolicited life update, I'm on a trip seeing my
                    lovely friends with some pontificating about life sprinkled
                    in. I couldn't ask for more. My other projects are on hold
                    while I <Struck>dilly dally</Struck> soul search. The coasts
                    of Canada continue to call to me like sirens, if the sirens
                    were most of my friends and cooler cities. Otherwise I'm
                    doing alright, albeit exhausted. That concludes our update.
                    Commencing the thinking now.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Beauty, utility, art, and science</Heading>
                <Paragraph>
                    I went to an ice cream making workshop recently and left
                    with more thoughts than pints. The instructors were equal
                    parts excited about ice cream and extremely knowledgeable
                    about the craft. They spoke about how strawberry ice cream
                    is not naturally pink, and how techniques were invented to
                    get it to look the right colour so that people could connect
                    to the treat visually while eating. They spoke about how the
                    texture of ice cream can be manipulated so the experience of
                    eating it is more pleasant. They spoke about ratios,
                    decorations, legal disputes, and more. It's a little
                    embarrassing how obvious it seemed in retrospect. Like, of
                    course the whimsical ice cream company also practices very
                    serious science to make their goals a reality. They{' '}
                    <Em>have</Em> to.
                </Paragraph>
                <Paragraph>
                    My current belief is that practicing an art very seriously
                    requires acts of scientific invention, and pursuing a
                    science in its purest form requires dreaming of a vision and
                    obsessing to bring your imagination to reality.{' '}
                    <Highlight>
                        The best artists are scientists and the best scientists
                        are artists.
                    </Highlight>
                </Paragraph>
                <Paragraph>
                    I'd propose that a similar relationship exists between
                    beauty and utility. I think about how flowers spread their
                    beauty through harmony with an ecosystem, feeding other
                    life. Their utility is as much a part of their beauty as it
                    is part of an exchange of value. Seeking beauty via utility
                    and utility via beauty are both noble and worthwhile. It's
                    keeping me sane at work to realize that while my job may be
                    to produce a utility, that does not stop me from seeking
                    beauty nonetheless. After all, creating an ecosystem where
                    flowers flourish is an enticing goal all unto itself.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Painters paint</Heading>
                <Aside>
                    This thought was inspired by someone whose name/account I
                    misplaced. If anyone recognizes it, please let me know so I
                    can credit more appropriately!
                </Aside>
                <Paragraph>
                    <Em>
                        "When I'm stressed or frustrated, I call my dad for
                        support. Regardless of what is going on, the first thing
                        he asks me is 'when was the last time you painted?'" - A
                        painter
                    </Em>
                </Paragraph>
                <Paragraph>
                    The painter goes on to explain their dad's thoughts. They
                    talk about how when we are wired for a certain type of
                    interaction with the world, our souls suffer in its absence.
                    They liken a painter not painting to a fish not swimming or
                    a flower not blooming. They assert that there are motions
                    that we complete independent of their utility or output,
                    actions that we simply perform as an extension of who we
                    are.
                </Paragraph>
                <Paragraph>
                    I think a lot about which canvases different souls are drawn
                    to. Why do I, for example, choose to refine theories and
                    thoughts into words like this? I'm not sure, but I know when
                    I don't do it, I deteriorate in a way I can't describe. Why
                    do some friends describe themselves as "musicians who work
                    in the service industry" and others as "software engineers
                    who like hiking"?{' '}
                    <Highlight>
                        Perhaps we are all artists, practicing different arts.
                    </Highlight>{' '}
                    If so, then nurturing the arts we practice is our most
                    crucial pursuit.
                </Paragraph>
                <Paragraph>
                    I'm drawn to this quote from <Em>Blue Eyed Samurai</Em>, my
                    favourite in the whole show. I believe it encapsulates what
                    it means to be an artist so purely. It seemed fitting to
                    leave you with it now.
                </Paragraph>
                <Paragraph>
                    <Em>
                        "To be an artist is to do one thing only. Look at me.
                        Cannot fight, or weave, or farm. I make swords. I cook
                        for strength to make good swords. I study the sutras to
                        cleanse my heart to make good swords. [...] I only know
                        how to make swords. Each morning, I start a fire. And
                        begin again." - Master Eiji
                    </Em>
                </Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    <FoundItem
                        url="https://www.hyrumslaw.com/"
                        title="Hyrum's Law"
                    >
                        This website succinctly explains one of my favourite
                        concepts. Hyrum's Law is about software, but I find it
                        applies to everything. Everything we do becomes a part
                        of our contract with life, and things in our lives will
                        quietly begin to depend on it. It reminds me to be
                        mindful in work and friendship alike.
                    </FoundItem>
                    <FoundItem
                        url="https://ifeelsomuchsha.me/"
                        title="ifeelsomuchsha.me"
                    >
                        This website is a work of art, exploring the emotion of
                        shame. A powerful experience. Please check it out.
                    </FoundItem>
                    <FoundItem
                        url="https://blog.tally.so/6-years-in-6-million-far/"
                        title="6 years in, $6 million far"
                    >
                        Tally is a form-making app. I like the product, but
                        admittedly don't use it much. What I find more
                        compelling is the story. It's uplifting to see a
                        business that just saw a problem, solved it with a team
                        of founders who care, and doesn't have some large "take
                        over the world" goal. This article is a reflection on
                        Tally's growth by its CEO, and it's a great read for
                        tired tech workers. There is hope.
                    </FoundItem>
                    <FoundItem
                        url="https://charliegedeon.com/the-internet-is-all-porn-and-you-might-not-even-realize-it/"
                        title="The internet is all porn and you might not even realize it"
                    >
                        This is a reflection on how activities can become
                        imitations of something real. Porn in the traditional
                        sense replaces actual intimacy in a similar way that
                        betting on sports replaces actually playing sports for
                        leisure. I found this abstraction really interesting.
                    </FoundItem>
                </FoundList>
            </Section>
            <Section>
                <Question
                    id={1141}
                    text="Why do/don't you believe in love at first sight?"
                >
                    <Paragraph>
                        I'm still chewing on my answer, but I'll add it to the
                        website once I have something. Curious to hear what
                        people think though!
                    </Paragraph>
                </Question>
            </Section>
        </>
    ),
};

export { edition012 };

import { Section } from '@/app/(components)/section';
import {
    Aside,
    Em,
    Heading,
    Highlight,
    Link,
    List,
    ListItem,
    Paragraph,
    Struck,
} from '@/app/(components)/text';
import { FoundItem, FoundList } from '@/app/(components)/found';
import { Question } from '@/app/(components)/question';
import { Edition } from '@/utils/types';

const edition011: Edition = {
    number: 11,
    vibe: "oh boy we're in for a treat",
    colors: ['#FF8A6B', '#FFC46B', '#FFE9C7', '#F2637E'],
    content: (
        <>
            <Section>
                <Heading>Life is dazzlingly insane</Heading>
                <Paragraph>
                    New email design, kinda same me. I even made a{' '}
                    <Link href="https://somethinglovely.vercel.app">
                        pretty landing page
                    </Link>{' '}
                    for this newsletter. The world is wild, and I've been
                    thinking big boy thoughts that only writing can process.
                </Paragraph>
                <Paragraph>
                    Quick update on me. I'm a little meh these days. I tend to
                    retreat to writing to find myself when I feel lost and that
                    is certainly what is happening now. I've been obsessing over{' '}
                    <Link href="https://wdyt.site">wdyt.site</Link> because it's
                    fun, I'm looking for playtesters in Calgary to iron out a
                    board game I'm working on, and I'm also a little
                    portrait-photography-curious these days. Now that we're done
                    with this lightning round update, <Em>let's hop in</Em>.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Undercover artist</Heading>
                <Paragraph>
                    Recently I've been feeling a bit like a covert operative at
                    work. By day I masquerade as a productivity enthusiast eager
                    to squeeze optimizations out of the latest and greatest in
                    AI tools. By night <Aside>(also during the day)</Aside> I
                    secretly care about doing things well.
                </Paragraph>
                <Paragraph>
                    I was drawn to software engineering because of its{' '}
                    <Aside>(seemingly)</Aside> unique combination of job
                    prospects within a practice that I could{' '}
                    <Highlight>approach as an art</Highlight>. It felt smooth to
                    transition from being a writer and designer into a code
                    writer and system designer. The utility of engineering
                    software was interconnected with the art of solving a
                    problem well. I didn't even think of these concepts as being
                    separable until the last 1-2 years.
                </Paragraph>
                <Paragraph>
                    AI tools swept the industry in a panic and honestly sent me
                    into an identity crisis I haven't quite solved yet. I've
                    straddled the line between art and utility for so long that
                    separating them was tearing at me from inside. Now I find
                    myself haunted by questions without a clear answer.
                </Paragraph>
                <List>
                    <ListItem>
                        How do I lead others knowing that businesses want output
                        and their brains need understanding?
                    </ListItem>
                    <ListItem>
                        How do I stop myself from descending into mindless
                        actions when that seems to be the "optimal"{' '}
                        <Aside>(whatever that means)</Aside> short-term action
                        for my career?
                    </ListItem>
                    <ListItem>
                        Does any of this matter if the users{' '}
                        <Aside>- seem to -</Aside> accept mediocre solutions to
                        their problems anyway?
                    </ListItem>
                    <ListItem>
                        For what reason do I make software? Money? Art? Users?
                        Fun? All of the above?{' '}
                        <Highlight>
                            Can these even live in harmony anymore?
                        </Highlight>
                    </ListItem>
                </List>
                <Paragraph>
                    Nothing is clear just yet, but I've found solace in pursuing
                    the{' '}
                    <Link href="https://thethreevirtues.com/">
                        "3 virtues of engineering"
                    </Link>{' '}
                    - <Highlight>laziness, impatience, and pride</Highlight>. I
                    still want to solve meaningful problems. I want to be lazy
                    enough to make things easier for people, impatient enough to
                    want those solutions to be responsive to their problems, and
                    prideful enough to care about the quality of work with my
                    name on it.
                </Paragraph>
                <Paragraph>
                    This hasn't resolved my conundrum, but it gives me enough
                    sanity to resume my undercover artist duties day by day.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Pretty please ask me good questions</Heading>
                <Paragraph>
                    I've been on a violent quest to purge mediocre questions
                    from my collection on{' '}
                    <Link href="https://wdyt.site">wdyt.site</Link>. Doing this
                    means I'm in dire need of new questions - please suggest any
                    you have! Feel free to pick a fun nickname so I can credit
                    you forever.
                </Paragraph>
                <Paragraph>
                    I like questions that evoke interesting answers. That's
                    really the only requirement. If you want to workshop a bit,
                    reply here and we can riff.
                </Paragraph>
            </Section>
            <Section>
                <Heading>Is there a wrong way to love?</Heading>
                <Highlight>
                    <Em>Written by M.C.</Em>
                </Highlight>
                <Paragraph>
                    Recently I watched American figure skater Alysa Liu win gold
                    at the 2026 Milano-Cortina Olympics and was struck by her
                    unique story. Alysa originally retired from figure skating 4
                    years ago, citing burnout and a loss of passion for the
                    sport she once loved. However, after taking a few years off
                    to travel, go to college, and live a normal teenage life,
                    Alysa decided to return to skating on her own terms.
                    Although she returned to elite-level training, this time it
                    was different. She took personal control of her training
                    schedule and demanded creative input in her program
                    choreography. Even to me, someone who knows very little
                    about figure skating, her skating seemed intangibly
                    different after this comeback. To put it simply, the love
                    was back.
                </Paragraph>
                <Paragraph>
                    This whole story got me thinking: is there a wrong way to
                    love? Why are some passions beautiful and motivating, while
                    others turn toxic and rot away something that was once a
                    cherished part of one's soul? Is there always a certain
                    threshold where love turns to unhealthy obsession? Or is
                    there simply a better way to love?
                </Paragraph>
                <Paragraph>
                    <Aside>
                        Editor's note: I'm sorry it took me so long to post
                        this, M.C., but it's beautiful. Thank you for writing
                        in.
                    </Aside>
                </Paragraph>
            </Section>
            <Section>
                <Heading>Hey, these were interesting</Heading>
                <FoundList>
                    <FoundItem
                        url="https://artofhosting.luma.com/"
                        title="The art of hosting"
                    >
                        Honestly looks like a treasure trove of guides and
                        lessons learned from successful community builders and
                        event maestros. I haven't gone through it all yet, but
                        this will be on my reading list for the next few weeks.{' '}
                        <Em>
                            The website is also beautiful and made by one of my
                            now-favourite designers
                        </Em>
                        .
                    </FoundItem>
                    <FoundItem
                        url="https://www.fieldnotes.nautilus.quest/p/prompt-the-experiences-you-want"
                        title="Prompt the experiences you want"
                    >
                        A seemingly obvious reminder to just create the
                        lifestyles that entice you. As someone who frequently
                        falls into a "woe is me, life is terrible, and I can't
                        change it" mindset, this was a timely read.
                    </FoundItem>
                    <FoundItem url="https://laurent.fyi/" title="laurent.fyi">
                        Easily in my top 5 coolest websites I've ever seen. I
                        love the design, I love the style, and this designer has
                        earned a new fan.
                    </FoundItem>
                    <FoundItem
                        url="https://www.youtube.com/watch?v=ZhFH8pi6Jdo"
                        title="When teenagers run virtual democracies"
                    >
                        I was raised on the internet and I've actually tried to
                        run one of these internet democracies before with
                        teenagers. This video was funny, but also an interesting
                        insight into how systems work when incentives clash.
                        Long video, throw it on while you're doing chores.
                    </FoundItem>
                </FoundList>
            </Section>
            <Section>
                <Question
                    id={1136}
                    text="What did you use to judge people for that you now completely understand?"
                >
                    <Paragraph>
                        For me, I used to really look down on people who didn't
                        try their hardest at everything. I thought it was
                        laziness. As an adult I now understand that to properly
                        try at anything, you have to realize what doesn't matter
                        to you, even if that thing matters a lot to someone
                        else. I'm a little immature, so it still frustrates me{' '}
                        <Struck>(especially at work)</Struck>, but I find myself
                        understanding it far more these days.
                    </Paragraph>
                </Question>
            </Section>
        </>
    ),
};

export { edition011 };

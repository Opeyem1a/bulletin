import { Masthead } from '@/app/(components)/masthead';
import { COLORS, backgroundColorClass } from '@/app/(config)/theme';
import { Edition } from '@/utils/types';
import styles from '@/app/(signup)/signup.module.css';

interface SampleEditionProps {
    edition: Edition;
}

/**
 * The top of a real edition, rendered with the email's own components and faded
 * out. Inert, since it's only there to look at and its links sit under the fade.
 */
const SampleEdition = ({ edition }: SampleEditionProps) => {
    return (
        <section className={styles.sample}>
            <h2 className={styles.sampleCaption}>
                Here&apos;s what one looks like
            </h2>
            <div className={styles.sampleCard} inert>
                <table
                    role="presentation"
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    className={backgroundColorClass('card')}
                    style={{ backgroundColor: COLORS.card }}
                >
                    <tbody>
                        <Masthead
                            edition={edition}
                            coverSrc="/sample-cover.jpg"
                        />
                        {edition.content}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export { SampleEdition };

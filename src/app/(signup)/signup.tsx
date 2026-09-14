'use client';

import {
    CSSProperties,
    ReactNode,
    useActionState,
    useEffect,
    useRef,
    useState,
} from 'react';
import { subscribe, SignupState } from '@/app/(signup)/actions';
import { Glow } from '@/app/(signup)/glow';
import { Edition } from '@/utils/types';
import styles from '@/app/(signup)/signup.module.css';

const INITIAL_STATE: SignupState = { status: 'idle' };

interface SignupProps {
    cover: Edition['cover'];
    /** Shown below the form, in front of the glow. */
    children?: ReactNode;
}

const Signup = ({ cover, children }: SignupProps) => {
    // Controlled, so the email survives React resetting the form after an error.
    const [email, setEmail] = useState('');
    const [state, formAction, pending] = useActionState(
        subscribe,
        INITIAL_STATE
    );
    const succeeded = state.status === 'success';
    const successHeadingRef = useRef<HTMLHeadingElement>(null);

    // The form goes away on success, so move focus to what replaced it.
    useEffect(() => {
        if (succeeded) {
            successHeadingRef.current?.focus();
        }
    }, [succeeded]);

    return (
        <div className={styles.stage}>
            <Glow cover={cover} text={email} bloom={succeeded} />
            <div
                className={`${styles.signup} ${styles.enter}`}
                style={{ '--order': 4 } as CSSProperties}
            >
                {succeeded ? (
                    <div className={styles.success}>
                        <h2
                            ref={successHeadingRef}
                            tabIndex={-1}
                            className={styles.successHeading}
                        >
                            You&apos;re on the list
                        </h2>
                        <p className={styles.successText}>
                            Thank you. I add everyone by hand, so give me a day
                            or two. The next edition will find its way to you.
                        </p>
                    </div>
                ) : (
                    <form action={formAction} className={styles.form}>
                        <label
                            htmlFor="email"
                            className={styles.visuallyHidden}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            aria-invalid={state.status === 'error'}
                            className={styles.input}
                        />
                        {/* People never see this field; bots fill it in. */}
                        <div className={styles.honeypot} aria-hidden>
                            <label>
                                Website
                                <input
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={pending}
                            className={styles.button}
                        >
                            Sign me up
                        </button>
                    </form>
                )}
                {state.status === 'error' && (
                    <p role="alert" className={styles.error}>
                        {state.message}
                    </p>
                )}
                <p className={styles.fine}>
                    Email me to &quot;unsubscribe.&quot; No hard feelings, ever.
                </p>
            </div>
            {children}
        </div>
    );
};

export { Signup };

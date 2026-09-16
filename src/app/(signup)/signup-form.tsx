'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { subscribe, SignupState } from '@/app/(signup)/actions';

const INITIAL_STATE: SignupState = { status: 'idle' };

const SignupForm = () => {
    // Controlled, so the email survives React resetting the form after an error.
    const [email, setEmail] = useState('');
    const [state, formAction, pending] = useActionState(
        subscribe,
        INITIAL_STATE
    );
    const succeeded = state.status === 'success';
    const successRef = useRef<HTMLParagraphElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // The form goes away on success, so move focus to what replaced it. On an
    // error, focus goes back to the email to fix it.
    useEffect(() => {
        if (state.status === 'success') {
            successRef.current?.focus();
        } else if (state.status === 'error') {
            inputRef.current?.focus();
        }
    }, [state]);

    return (
        <div className="signup">
            {succeeded ? (
                <p ref={successRef} tabIndex={-1} className="success">
                    <strong>You&apos;re on the list.</strong> Thank you. I add
                    everyone by hand, so give me a day or two.
                </p>
            ) : (
                <form action={formAction} className="form">
                    <label htmlFor="email" className="visually-hidden">
                        Email
                    </label>
                    <input
                        ref={inputRef}
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        aria-invalid={state.status === 'error'}
                        className="input"
                    />
                    {/* People never see this field; bots fill it in. */}
                    <div className="honeypot" aria-hidden>
                        <label>
                            Website
                            <input
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={pending} className="button">
                        let me in pls
                    </button>
                </form>
            )}
            {state.status === 'error' && (
                <p role="alert" className="error">
                    {state.message}
                </p>
            )}
            <p className="fine">
                Email me to &quot;unsubscribe.&quot; No hard feelings, ever.
            </p>
        </div>
    );
};

export { SignupForm };

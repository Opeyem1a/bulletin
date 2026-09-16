'use server';

type SignupState =
    | { status: 'idle' }
    | { status: 'success' }
    | { status: 'error'; message: string };

// Deliberately loose, since a person reads every signup. Backticks are excluded
// because the address is posted to Discord inside a code span.
const EMAIL_PATTERN = /^[^\s@`]+@[^\s@`]+\.[^\s@`]+$/;

const SOMETHING_BROKE: SignupState = {
    status: 'error',
    message: 'Something broke on my end. Try again in a bit?',
};

/**
 * Posts each signup to a Discord channel. People are added to the mailing list
 * by hand from there.
 */
async function subscribe(
    _previous: SignupState,
    formData: FormData
): Promise<SignupState> {
    // A field people never see. Bots fill in everything, so pretend it worked.
    if (formData.get('website')) {
        return { status: 'success' };
    }

    const email = String(formData.get('email') ?? '').trim();
    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
        return {
            status: 'error',
            message: "That email doesn't look quite right.",
        };
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set, so a signup was lost.');
        return SOMETHING_BROKE;
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `New signup: \`${email}\``,
                // Without this, "@everyone" typed into the form would ping the
                // whole server.
                allowed_mentions: { parse: [] },
            }),
        });
        if (!response.ok) {
            console.error(`Discord webhook failed with ${response.status}.`);
            return SOMETHING_BROKE;
        }
    } catch (error) {
        console.error('Discord webhook failed.', error);
        return SOMETHING_BROKE;
    }

    return { status: 'success' };
}

export { subscribe };
export type { SignupState };

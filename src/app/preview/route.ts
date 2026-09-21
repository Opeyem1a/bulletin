import { renderEmail } from '@/app/(config)/render-email';
import { getEdition, getLatestEdition } from '@/app/(email-content)/editions';

/**
 * Live preview of an edition, exactly as the email renders: `/preview` shows the
 * latest, `/preview?edition=11` a specific one.
 *
 * Local only: the site is public, and the latest edition is usually an unsent
 * draft.
 */
export async function GET(request: Request) {
    if (process.env.NODE_ENV === 'production') {
        return new Response('Not found', { status: 404 });
    }

    const param = new URL(request.url).searchParams.get('edition');
    const edition = param ? getEdition(Number(param)) : getLatestEdition();
    if (!edition) {
        return new Response(`No edition ${param}`, { status: 404 });
    }

    const html = await renderEmail(edition);
    return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}

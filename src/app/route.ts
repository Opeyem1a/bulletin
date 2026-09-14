import { renderEmail } from '@/app/(config)/render-email';
import { getEdition, getLatestEdition } from '@/app/(email-content)/editions';
import { generateCover } from '@/utils/cover';

/**
 * Live preview of an edition, exactly as the email renders: `/` shows the
 * latest, `/?edition=10` a specific one. The cover is drawn on each request, so
 * edits to its colours or seed show up on refresh.
 */
export async function GET(request: Request) {
    const param = new URL(request.url).searchParams.get('edition');
    const edition = param ? getEdition(Number(param)) : getLatestEdition();
    if (!edition) {
        return new Response(`No edition ${param}`, { status: 404 });
    }

    const cover = generateCover(edition.cover).toString('base64');
    const html = await renderEmail(edition, `data:image/jpeg;base64,${cover}`);
    return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}

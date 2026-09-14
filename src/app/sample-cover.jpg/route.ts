import { getLatestSentEdition } from '@/app/(email-content)/editions';
import { generateCover } from '@/utils/cover';

export const dynamic = 'force-static';

/**
 * The cover of the edition shown on the signup page, drawn once at build.
 */
export function GET() {
    const edition = getLatestSentEdition();
    if (!edition) {
        return new Response('No edition has been sent yet', { status: 404 });
    }

    return new Response(new Uint8Array(generateCover(edition.cover)), {
        headers: { 'Content-Type': 'image/jpeg' },
    });
}

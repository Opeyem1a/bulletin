import { SIGNUP_COVER } from '@/app/(config)/constants';
import { generateCover } from '@/utils/cover';

export const dynamic = 'force-static';

/**
 * The signup page's glow as a still image, drawn once at build. Shows before the
 * animated glow starts, and instead of it for reduced motion or without WebGL.
 */
export function GET() {
    return new Response(new Uint8Array(generateCover(SIGNUP_COVER)), {
        headers: { 'Content-Type': 'image/jpeg' },
    });
}

import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { getOutputFilename } from '@/app/(config)/helpers';
import { renderEmail } from '@/app/(config)/render-email';
import {
    EDITIONS,
    getEdition,
    getLatestEdition,
} from '@/app/(email-content)/editions';

(async function main() {
    // `yarn build:html 11` builds edition 11; with no number, the latest edition.
    const arg = process.argv[2];
    const edition = arg ? getEdition(Number(arg)) : getLatestEdition();
    if (!edition) {
        const available = EDITIONS.map((e) => e.number).join(', ');
        throw new Error(
            `No edition ${arg}. Available: ${available}. Add new editions to src/app/(email-content)/editions.ts`
        );
    }

    const dirPath = resolve(process.cwd(), 'archive');
    mkdirSync(dirPath, { recursive: true });

    const html = await renderEmail(edition);
    const htmlPath = resolve(
        dirPath,
        getOutputFilename({ editionNumber: edition.number })
    );
    writeFileSync(htmlPath, html, { encoding: 'utf-8' });

    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`Email saved to ${htmlPath} (${kb} KB)`);
    if (Buffer.byteLength(html) > 100 * 1024) {
        console.warn(
            'Warning: Gmail clips emails over ~102 KB with "[Message clipped]".'
        );
    }
})();

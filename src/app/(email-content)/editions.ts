import { readdirSync } from 'fs';
import { resolve } from 'path';
import { getOutputFilePrefix } from '@/app/(config)/helpers';
import { edition011 } from '@/app/(email-content)/011';
import { Edition } from '@/utils/types';

/**
 * Every edition in the current format (011 onwards). Add each new one here.
 * 004–010 use the legacy components and aren't built by this pipeline.
 */
const EDITIONS: Edition[] = [edition011];

function getEdition(editionNumber: number) {
    return EDITIONS.find((edition) => edition.number === editionNumber);
}

function getLatestEdition() {
    return EDITIONS.reduce((latest, edition) =>
        edition.number > latest.number ? edition : latest
    );
}

/**
 * The newest edition that has gone out, for showing publicly. An edition counts
 * once its HTML is in archive/ (`yarn build:html` writes it just before
 * sending), so drafts never show up. Undefined until one has been sent.
 */
function getLatestSentEdition() {
    const archived = readdirSync(resolve(process.cwd(), 'archive'));
    return EDITIONS.filter((edition) =>
        archived.some((file) =>
            file.startsWith(
                getOutputFilePrefix({ editionNumber: edition.number })
            )
        )
    ).reduce<Edition | undefined>(
        (latest, edition) =>
            !latest || edition.number > latest.number ? edition : latest,
        undefined
    );
}

export { EDITIONS, getEdition, getLatestEdition, getLatestSentEdition };

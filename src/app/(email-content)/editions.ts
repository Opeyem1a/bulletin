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

export { EDITIONS, getEdition, getLatestEdition };

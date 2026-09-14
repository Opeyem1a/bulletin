import { NAME } from '@/app/(config)/constants';
import { HexColor } from '@/utils/types';

function formatEditionNumber(editionNumber: number) {
    return editionNumber.toString().padStart(3, '0');
}

function getEditionName(editionNumber: number) {
    return `edition #${formatEditionNumber(editionNumber)}`;
}

function getDocumentTitle({ editionNumber }: { editionNumber: number }) {
    return `${NAME} - ${getEditionName(editionNumber)}`;
}

function getOutputFilePrefix({ editionNumber }: { editionNumber: number }) {
    return `email-${formatEditionNumber(editionNumber)}_`;
}

function getOutputFilename({ editionNumber }: { editionNumber: number }) {
    return `${getOutputFilePrefix({ editionNumber })}${new Date().getTime()}.html`;
}

function getQuestionUrl(questionId: number) {
    return `https://www.wdyt.site/ask/q/${questionId}`;
}

/**
 * The average of the cover colours. Shown behind the cover while it loads, or
 * instead of it when a client blocks images.
 */
function getCoverBackground(colors: HexColor[]): HexColor {
    const channels = [16, 8, 0].map((shift) => {
        const total = colors.reduce(
            (sum, color) =>
                sum + ((parseInt(color.slice(1), 16) >> shift) & 0xff),
            0
        );
        return Math.round(total / colors.length);
    });
    return `#${channels.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

export {
    formatEditionNumber,
    getEditionName,
    getDocumentTitle,
    getOutputFilePrefix,
    getOutputFilename,
    getQuestionUrl,
    getCoverBackground,
};

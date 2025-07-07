import { NAME } from '@/app/(config)/constants';

function formatEditionNumber(editionNumber: number) {
    return editionNumber.toString().padStart(3, '0');
}

function getEditionName(editionNumber: number) {
    return `edition #${formatEditionNumber(editionNumber)}`;
}

function getDocumentTitle({ editionNumber }: { editionNumber: number }) {
    return `${NAME} - ${getEditionName(editionNumber)}`;
}

function getOutputFilename({ editionNumber }: { editionNumber: number }) {
    return `email-${formatEditionNumber(editionNumber)}_${new Date().getTime()}.html`
}

export { getEditionName, getDocumentTitle, getOutputFilename };

import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { renderToString } from 'react-dom/server';
import { Email } from '@/app/page';
import { getOutputFilename } from '@/app/(config)/helpers';

(function main() {
    const args = process.argv.slice(2); // slice off node path and script file path
    const editionNumber = Number(args[0]); // should be a number in the first argument

    if (typeof editionNumber !== 'number') {
        throw new Error(
            'No edition number provided. Use `yarn build:html <edition_number>` instead'
        );
    }

    const content = renderToString(<Email editionNumber={editionNumber} />);
    const filename = getOutputFilename({ editionNumber });

    const dirPath = `${process.cwd()}/archive`;
    const filepath = resolve(dirPath, filename);
    mkdirSync(dirPath, { recursive: true });
    writeFileSync(filepath, `<!DOCTYPE html>${content}`, { encoding: 'utf-8' });

    console.log(`File saved to ${filepath}`);
})();

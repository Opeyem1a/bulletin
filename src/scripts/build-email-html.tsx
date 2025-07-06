import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { renderToString } from 'react-dom/server';
import Email from '@/app/page';

(function main() {
    const content = renderToString(<Email />);
    const filename = 'email.html';

    const filepath = resolve(process.cwd(), filename);
    writeFileSync(filepath, content, { encoding: 'utf-8' });

    console.log(`File saved to ${filepath}`);
})();

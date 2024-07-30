import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'files', 'file-data.txt');

function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}

export default readFile;
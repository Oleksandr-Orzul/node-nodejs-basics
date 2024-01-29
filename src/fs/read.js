import { readFile as r } from 'node:fs/promises';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const pathToFile = j(folder, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const contents = await r(pathToFile);
    console.log(contents.toString());
  } catch (err) {
    console.error('An FS operation has failed');
  }
};

await read();

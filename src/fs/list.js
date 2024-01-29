import { readdir as readDir } from 'node:fs/promises';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const sourceFolder = j(folder, 'files');

const list = async () => {
  try {
    const files = await readDir(sourceFolder);

    console.log(files);
    // files.forEach(file => console.log(file));
  } catch (err) {
    console.error('An FS operation has failed');
  }
};

await list();

import { rm as deleteFile } from 'node:fs/promises';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const target = j(folder, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await deleteFile(target);
  } catch (err) {
    console.error('FS operation has failed');
  }
};

await remove();

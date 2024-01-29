import { renameSync as r } from 'node:fs';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const oldFilePath = j(folder, 'files', 'wrongFilename.txt');
const newFilePath = j(folder, 'files', 'properFilename.md');

const renameFile = (oldPath, newPath) => {
  return new Promise((resolve, reject) => {
    r(oldPath, newPath);
    resolve();
  });
};

const rename = async () => {
  try {
    await renameFile(oldFilePath, newFilePath);
  } catch (err) {
    console.error('FS operation has failed');
  }
};

await rename();

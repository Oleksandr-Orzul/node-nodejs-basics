import { fileURLToPath as urlToPath } from 'node:url';
import { dirname as dir, join as j } from 'node:path';
import { readFile as read } from 'node:fs/promises';
import { createHash as hash } from 'node:crypto';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const pathToFile = j(folder, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const contents = await read(pathToFile);

    let hashValue = hash('sha256').update(contents);
    console.log(hashValue.digest('hex'));
  } catch (err) {
    throw err;
  }
};

await calculateHash();

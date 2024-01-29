import { createWriteStream as writeStream } from 'node:fs';
import proc from 'node:process';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const pathToFile = j(folder, 'files', 'fileToWrite.txt');

const write = async () => {
  try {
    const stream = writeStream(pathToFile);
    proc.stdin.on('data', (chunk) => stream.write(chunk.toString()));
  } catch (err) {
    console.error(err.message);
  }
};

await write();

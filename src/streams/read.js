import { createReadStream as readStream } from 'node:fs';
import proc from 'node:process';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const pathToFile = j(folder, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const stream = readStream(pathToFile);
    stream.on('data', (chunk) => proc.stdout.write(chunk.toString()));
  } catch (err) {
    console.error(err.message);
  }
};

await read();

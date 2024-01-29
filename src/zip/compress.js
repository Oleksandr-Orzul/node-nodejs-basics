import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';
import { createGzip as gzip } from 'node:zlib';
import { pipeline as pl } from 'node:stream';
import {
  createReadStream as readStream,
  createWriteStream as writeStream,
} from 'node:fs';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const sourceFile = j(folder, 'files', 'fileToCompress.txt');
const compressedFile = j(folder, 'files', 'archive.gz');

const compress = async () => {
  pl(readStream(sourceFile), gzip(), writeStream(compressedFile), (err) =>
    console.error(err)
  );
};

await compress();

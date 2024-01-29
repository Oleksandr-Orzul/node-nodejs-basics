import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';
import { createUnzip as unzip } from 'node:zlib';
import { pipeline as pl } from 'node:stream';
import {
  createReadStream as readStream,
  createWriteStream as writeStream,
} from 'node:fs';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const compressedFile = j(folder, 'files', 'archive.gz');
const decompressedFile = j(folder, 'files', 'fileToDecompress.txt');

const decompress = async () => {
  pl(
    readStream(compressedFile),
    unzip(),
    writeStream(decompressedFile),
    (err) => console.error(err)
  );
};

await decompress();

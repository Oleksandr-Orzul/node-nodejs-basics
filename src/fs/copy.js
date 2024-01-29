import { copyFile as cp, mkdir as mk, readdir as rd } from 'node:fs/promises';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const src = j(folder, 'files');
const dest = j(folder, 'files_copy');

const copy = async () => {
  try {
    await mk(dest);

    const files = await rd(src);
    for (const file of files) {
      await cp(j(src, file), j(dest, file));
    }
  } catch (err) {
    console.error('FS operation failed');
  }
};

await copy();

import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';
import { spawn as sp } from 'node:child_process';
import proc from 'node:process';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);

const pathToFile = j(folder, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = sp('node', [pathToFile, ...args]);

  child.stdout.on('data', (data) => proc.stdout.write(data));

  proc.stdin.pipe(child.stdin);
};

spawnChildProcess(['someArgument1', 'someArgument2']);

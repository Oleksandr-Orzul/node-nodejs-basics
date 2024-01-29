import { Worker as W, workerData as wd } from 'node:worker_threads';
import { dirname as dir, join as j } from 'node:path';
import { fileURLToPath as urlToPath } from 'node:url';
import os from 'os';

const fileName = urlToPath(import.meta.url);
const folder = dir(fileName);
const workerFile = j(folder, 'worker.js');

const coresCount = os.cpus().length;
const startIncrement = 10;
const finishIncrement = coresCount + 10;

const performCalculations = async () => {
  const taskPromises = [];

  for (let i = startIncrement; i < finishIncrement; i++) {
    const taskPromise = new Promise((resolve, reject) => {
      const worker = new W(workerFile, { workerData: i });
      worker.on('message', (n) => resolve(n));
      worker.on('error', () => reject());
    });

    taskPromises.push(taskPromise);
  }

  let results = await Promise.allSettled(taskPromises);

  let result = results.map(({ status, value }) => {
    if (status === 'fulfilled') {
      return { status: 'resolved', data: value };
    } else {
      return { status: 'error', data: null };
    }
  });

  console.log(result);
};

await performCalculations();

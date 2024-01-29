import { parentPort as pp, workerData as wd } from 'node:worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  pp.postMessage(fibonacci(wd));
};

sendResult();

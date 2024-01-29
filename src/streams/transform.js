import proc from 'node:process';
import { Transform as T, pipeline as pl } from 'node:stream';

const transform = async () => {
  const reverse = new T({
    transform(chunk, encoding, callback) {
      const reversedData = chunk.toString().split('').reverse().join('') + '\n';
      this.push(reversedData);
      callback();
    },
  });

  pl(proc.stdin, reverse, proc.stdout, (err) => console.error(err.message));
};

await transform();

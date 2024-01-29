import proc from 'node:process';

const parseEnv = () => {
  for (const [key, value] of Object.entries(proc.env)) {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${value};`);
    }
  }
};

parseEnv();

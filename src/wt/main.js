import os from "os";
import { Worker } from "node:worker_threads";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const numberCPUs = os.cpus().length; 
  const workers = [];

  for (let i = 0; i < numberCPUs; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(join(__dirname, "worker.js"), {
        workerData: 10 + i, 
      });

      worker.on("message", (result) => resolve({ status: "resolved", data: result }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });

    workers.push(workerPromise);
  }

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();

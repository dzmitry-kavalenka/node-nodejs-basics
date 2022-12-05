import os from "os";
import { Worker } from "node:worker_threads";

const workerFile = "./src/wt/worker.js";

const performCalculations = async () => {
  const promises = os.cpus().map((_, index) => {
    const incNumber = index + 10;
    const worker = new Worker(workerFile);

    worker.postMessage(incNumber);

    const promise = new Promise((resolve) => {
      worker.once("error", () => {
        resolve({ status: "error", data: null });
      });

      worker.once("message", (message) => {
        resolve({ status: "resolved", data: message });
      });
    });

    return promise;
  });

  const data = await Promise.all(promises);

  console.log(data);
};

await performCalculations();

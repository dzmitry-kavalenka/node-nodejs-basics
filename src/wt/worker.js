import { parentPort, isMainThread } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (!isMainThread) {
    parentPort.once("message", (n) => {
      parentPort.postMessage(nthFibonacci(n));
    });
  }
};

sendResult();

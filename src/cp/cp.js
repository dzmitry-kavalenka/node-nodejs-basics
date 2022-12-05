import { fork } from "child_process";

const scriptFile = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
  fork(scriptFile, args);
};

spawnChildProcess(["arg1", "arg2"]);

import fs from "fs";
import { stdin } from "node:process";

const fileToWrite = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  const ws = fs.createWriteStream(fileToWrite);
  stdin.pipe(ws);
};

await write();

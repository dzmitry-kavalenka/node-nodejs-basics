import fs from "fs";
import { stdout } from "node:process";

const fileToRead = "./src/streams/files/fileToRead.txt";

const read = async () => {
  fs.createReadStream(fileToRead).pipe(stdout);
};

await read();

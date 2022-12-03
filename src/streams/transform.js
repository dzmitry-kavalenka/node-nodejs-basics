import { Transform } from "stream";
import { stdin, stdout } from "node:process";

const reverseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  },
});

const transform = async () => {
  stdin.pipe(reverseTr).pipe(stdout);
};

await transform();

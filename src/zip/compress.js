import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const fileToCompress = "./src/zip/files/fileToCompress.txt";
const gzipFile = "./src/zip/files/archive.gz";

const compress = async () => {
  const stream = createReadStream(fileToCompress);
  stream.pipe(createGzip()).pipe(createWriteStream(gzipFile));
};

await compress();

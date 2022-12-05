import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const fileToDecompress = "./src/zip/files/archive.gz";
const outputFile = "./src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const stream = createReadStream(fileToDecompress);
  stream.pipe(createUnzip()).pipe(createWriteStream(outputFile));
};

await decompress();

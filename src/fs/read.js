import fs from "fs/promises";

const fileToRead = "./src/fs/files/fileToRead.txt";

const read = async () => {
  try {
    const content = await fs.readFile(fileToRead, { encoding: 'utf8' });

    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();

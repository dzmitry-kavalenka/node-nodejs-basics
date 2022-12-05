import fs from "fs/promises";

const dirToRead = "./src/fs/files";

const list = async () => {
  try {
    const files = await fs.readdir(dirToRead);

    files.forEach((file) => console.log(file));
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();

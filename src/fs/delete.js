import fs from "fs/promises";

const fileToRemove = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  try {
    await fs.rm(fileToRemove);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();

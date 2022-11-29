import fs from "fs/promises";

const src = "./src/fs/files";
const wrongFilename = "wrongFilename.txt";
const properFilename = "properFilename.md";

const rename = async () => {
  try {
    const files = await fs.readdir(src);

    if (!files.includes(wrongFilename) || files.includes(properFilename)) {
      throw new Error("FS operation failed");
    }

    await fs.rename(`${src}/${wrongFilename}`, `${src}/${properFilename}`);
  } catch (error) {
    throw error;
  }
};

await rename();

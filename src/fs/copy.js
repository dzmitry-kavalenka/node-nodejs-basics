import fs from "fs/promises";

const from = "./src/fs/files";
const dest = "./src/fs/files_copy";

const copy = async () => {
  try {
    const files = await fs.readdir(from);

    await fs.mkdir(dest);
    await Promise.all(files.map(file => fs.copyFile(`${from}/${file}`, `${dest}/${file}`)));
  } catch (error) {
    if (error.code === "ENOENT" || error.code === 'EEXIST') {
      throw new Error("FS operation failed");
    }
  }
};

copy();

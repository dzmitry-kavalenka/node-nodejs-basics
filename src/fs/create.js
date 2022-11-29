import fs from "fs/promises";

const phrase = "I am fresh and young";
const pathToFile = "./src/fs/files/fresh.txt";

const create = async () => {
  try {
    await fs.writeFile(pathToFile, phrase, { flag: "wx" });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();

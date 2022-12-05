import fs from "fs/promises";
import crypto from 'crypto';

const fileToRead = "./src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  try {
    const content = await fs.readFile(fileToRead, { encoding: 'utf8' });
    const hex = crypto.createHash('sha256').update(content).digest('hex');

    console.log(hex);
  } catch (error) {
    throw error;
  }
};

await calculateHash();

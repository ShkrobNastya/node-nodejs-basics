import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");
  
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data); 
  } catch {
   throw new Error("FS operation failed");
  }
};

await read();

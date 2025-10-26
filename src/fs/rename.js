import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const filePathWrong = join(__dirname, "files", "wrongFilename.txt");
  const filePathCorrect = join(__dirname, "files", "properFilename.md");

   try { 
     await fs.rename(filePathWrong, filePathCorrect); 
   } catch { 
    throw new Error("FS operation failed");
   } 
};

await rename();

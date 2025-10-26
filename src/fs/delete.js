import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = join(__dirname, "files", "fileToRemove.txt");
  
  try { 
   await fs.unlink(filePath); 
  } catch { 
   throw new Error("FS operation failed");
  } 
};

await remove();

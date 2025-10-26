import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.txt");

  try { 
    await fs.appendFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch { 
    throw new Error("FS operation failed");
  } 
};

await create();

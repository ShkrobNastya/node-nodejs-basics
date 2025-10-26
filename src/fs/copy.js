import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const srcFolder = join(__dirname, "files");
  const destFolder = join(__dirname, "files_copy");

  try { 
    await fs.cp(srcFolder, destFolder, { recursive: true, errorOnExist: true, force: false });
  } catch { 
    throw new Error("FS operation failed");
  } 
};

await copy();

import fs from "fs/promises";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, "files");
  
  try { 
    const files = await fs.readdir(folderPath); 
    console.log(files);
  } catch { 
   throw new Error("FS operation failed");
  } };

await list();

import fs from "fs";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");
  
  try {
    const readStream = fs.createReadStream(filePath);

    readStream.pipe(process.stdout);

    readStream.on("error", () => {
      console.error("Error");
    });

  } catch (err) {
    console.error(`Error ${err}`);
  }
};

await read();

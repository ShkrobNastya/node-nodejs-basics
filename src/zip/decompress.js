import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const sourcePath = join(__dirname, "files", "archive.gz");
  const destPath = join(__dirname, "files", "fileToCompress.txt");

  try {
    const readStream = fs.createReadStream(sourcePath);
    const unzipStream = zlib.createUnzip();
    const writeStream = fs.createWriteStream(destPath);

    readStream.pipe(unzipStream).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("Success!");
    });

  } catch (err) {
    console.error(err.message);
  }
};

await decompress();

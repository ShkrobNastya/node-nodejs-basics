import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const sourcePath = join(__dirname, "files", "fileToCompress.txt");
  const destPath = join(__dirname, "files", "archive.gz");

  try {
    const readStream = fs.createReadStream(sourcePath);
    const gzipStream = zlib.createGzip();
    const writeStream = fs.createWriteStream(destPath);

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on("finish", () => {
      console.log("Success!");
    });

  } catch (err) {
    console.error(err.message);
  }
};

await compress();

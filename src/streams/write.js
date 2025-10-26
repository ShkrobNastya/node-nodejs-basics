import fs from "fs";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
 const filePath = join(__dirname, "files", "fileToWrite.txt");

  try {
    const writeStream = fs.createWriteStream(filePath, { flags: "w" });
    process.stdin.pipe(writeStream);

    writeStream.on("error", () => {
      console.error("Error");
    });

    writeStream.on("finish", () => {
      console.log("Success!");
    });

  } catch (err) {
    console.error(`Error ${err}`);
  }
};

await write();

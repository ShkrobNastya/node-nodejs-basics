import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    const readStream = fs.createReadStream(filePath);
    const hash = crypto.createHash("sha256");

    readStream.on("data", (chunk) => hash.update(chunk));
    readStream.on("end", () => {
      const finalHash = hash.digest("hex");
      console.log(finalHash);
    });
    readStream.on("error", () => {
      console.error("Error");
    });
  } catch (err) {
    console.error(err.message);
  }
};

await calculateHash();

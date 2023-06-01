import { readFile, writeFile } from "fs/promises";

/**
 * @param {string | URL} filePath A path to a file
 * @returns The contents of the file
 */
async function read(filePath) {
  return JSON.parse(await readFile(filePath));
}

/**
 * @param {string | URL} filePath A path to a file
 * @param {Object} data The content to write
 * @returns True if the file is written
 */
async function write(filePath, data) {
  await writeFile(filePath, JSON.stringify(data));
  return true;
}

const fileSystem = {
  read,
  write,
};

export default fileSystem;

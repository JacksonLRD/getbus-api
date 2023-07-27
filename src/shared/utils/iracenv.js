import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { env } from "node:process";

/**
 * Get all variables from .env file in root
 * @returns All variables in string format
 */
async function _getEnvs() {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const filePath = join(currentDir, "../../../", ".env");

  return readFile(filePath, { encoding: "utf-8" });
}

/**
 * Parse envs from string to object
 * @param {string} envsString Variables to be parsed
 * @returns Variables in object format
 */
async function _parseEnvs(envsString) {
  const envsObject = {};
  const regex = /([\w.-]+)=(\s*'[^']'|[^#\r\n]+)?/gm;

  const matches = envsString.matchAll(regex);

  for (const match of matches) {
    let value = match[2] || "";
    value = value.replace(/['"`]/gm, "");
    value = value.trim();

    envsObject[match[1]] = value;
  }

  return envsObject;
}

/**
 * Sets the environment variables
 * @param {Object} envsObject Variables in key-value format
 */
async function _setEnvs(envsObject) {
  if (typeof envsObject !== "object")
    throw new Error("envsObject must be an object");

  for (const key of Object.keys(envsObject)) {
    env[key] = envsObject[key];
  }
}

/**
 * Configure environment variables
 */
async function config() {
  const envsString = await _getEnvs();
  const envsObject = await _parseEnvs(envsString);

  await _setEnvs(envsObject);
}

const iracenv = {
  config,
};

export default iracenv;

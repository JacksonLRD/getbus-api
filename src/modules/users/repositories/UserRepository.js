import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

export default class UserRepository {
  async #currentFileContent() {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const filePath = join(currentDir, "../../../shared/database", "data.json");

    return JSON.parse(await readFile(filePath));
  }

  async find() {
    return this.#currentFileContent();
  }

  async findById(id) {
    const users = await this.#currentFileContent();

    return users.find((u) => u.id === id);
  }

  async create(data) {
    const currentFile = await this.#currentFileContent(this.filePath);
    currentFile.push(data);

    await writeFile(this.filePath, JSON.stringify(currentFile));

    return data.id;
  }
}

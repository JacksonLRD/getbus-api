import { readFile, writeFile } from "fs/promises";

export default class UserRepository {
  constructor({ filePath }) {
    this.filePath = filePath;
  }

  async #currentFileContent() {
    return JSON.parse(await readFile(this.filePath));
  }

  async find() {
    return this.#currentFileContent();
  }

  async create(data) {
    const currentFile = await this.#currentFileContent(this.filePath);
    currentFile.push(data);

    await writeFile(this.filePath, JSON.stringify(currentFile));

    return data.id;
  }
}

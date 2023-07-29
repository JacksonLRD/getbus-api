import UserRepository from "../repositories/UserRepository.js";

export default class UserService {
  #userRepository;

  constructor(repository = {}) {
    this.#userRepository = repository;
  }

  find() {
    return this.#userRepository.find();
  }

  findById(id) {
    return this.#userRepository.find(id);
  }

  create(data) {
    return this.#userRepository.create(data);
  }
}

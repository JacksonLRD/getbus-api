export default class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  find() {
    return this.userRepository.find();
  }

  create(data) {
    return this.userRepository.create(data);
  }
}

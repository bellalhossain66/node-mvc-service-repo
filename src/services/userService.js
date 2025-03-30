const userRepository = require("../repositories/userRepository");

class userService {
    async getAllUser() {
        return userRepository.findAll();
    }

    async createUser(userData) {
        return userRepository.create(userData);
    }

    async findUserByEmail(email) {
        return userRepository.findOneByEmail(email);
    }
}

module.exports = new userService();
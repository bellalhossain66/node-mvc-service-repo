const userRepository = require("../repositories/userRepository");

class userService {
    async getAllUser() {
        return userRepository.findAll();
    }

    async createUser(userData) {
        return userRepository.create(userData);
    }
}

module.exports = new userService();
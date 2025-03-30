const User = require('../models/userModel');

class userRepository {
    constructor() {
        this.users = [];
    }

    async findAll() {
        return User.findAll();
    }

    async create(userData) {
        return User.create(userData);
    }

    async findOneByEmail(email) {
        return User.findOne({ where: { email: email } });
    }
}

module.exports = new userRepository();
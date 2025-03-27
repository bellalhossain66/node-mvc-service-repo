const User = require('../models/userModel');

class userRepository{
    constructor(){
        this.users = [];
    }

    async findAll() {
        return User.findAll();
    }

    async create(userData) {
        return User.create(userData);
    }
}

module.exports = new userRepository();
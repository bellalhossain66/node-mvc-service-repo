const userService = require("../services/userService")

class userController {
    getUsers = async (req, res) => {
        const users = await userService.getAllUser();
        res.json(users);
    }

    createUser = async (req, res) => {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
}

module.exports = new userController();
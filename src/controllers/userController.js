const userService = require("../services/userService");
const { generateToken } = require("../utils/jwt");

class userController {
    getUsers = async (req, res) => {
        const users = await userService.getAllUser();
        res.json(users);
    }

    createUser = async (req, res) => {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }

    loginUser = async (req, res) => {
        const { email, password } = req.body;
        // console.log(req.body)

        const user = await userService.findUserByEmail(email);

        if (!user || password !== "123456") {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // console.log(user)

        const token = generateToken(user);
        res.json({ token });
    };
}

module.exports = new userController();
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    isValidUser: (req, res, next) => {
        next();
    },
    authMiddleware: (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invaild token!' });
            }
            req.isUser = decoded;
            next();
        })
    }
}
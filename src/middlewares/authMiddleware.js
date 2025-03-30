require('dotenv').config();
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwt');

module.exports = {
    isValidUser: (req, res, next) => {
        next();
    },
    authMiddleware: (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(403).json({ message: 'Invalid token!' });
        }
        req.isUser = decoded.data;
        next();
    }
}
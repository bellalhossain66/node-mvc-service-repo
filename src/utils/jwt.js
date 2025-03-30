require('dotenv').config();
const jwt = require('jsonwebtoken');
const cryptoJs = require('crypto-js');

encryptData = (data) => {
    return cryptoJs.AES.encrypt(JSON.stringify(data), process.env.JWT_SECRET).toString();
}

decryptData = (encryptedData) => {
    const bytes = cryptoJs.AES.decrypt(encryptedData, process.env.JWT_SECRET);
    return JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
}

generateToken = (user) => {
    return jwt.sign(
        {
            data: encryptData({
                id: user.id,
                name: user.name,
                email: user.email
            })
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}

verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        decoded.data = decryptData(decoded.data);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };
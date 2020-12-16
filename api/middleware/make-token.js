const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

module.exports = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    };
    const options = {
        expiresIn: '120s'
    };
    return jwt.sign(payload, jwtSecret, options);
};
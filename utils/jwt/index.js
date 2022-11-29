const config = require('../../config/env')
const jwt = require('jsonwebtoken')

const singToken = (payload) => {
    return jwt.sign(payload, config.jwtSecret)
}

const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret)
}

module.exports = { singToken, verifyToken }
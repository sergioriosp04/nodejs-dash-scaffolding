const config = require('../../config/env')
const jwt = require('jsonwebtoken')

const singToken = (payload) => {
    return jwt.sign(payload, config.jwtSecret, {expiresIn: '1d'})
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret)
    } catch (err) {
        return new Error('json web token no valido')
    }
}

module.exports = { singToken, verifyToken }
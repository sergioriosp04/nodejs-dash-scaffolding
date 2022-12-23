const config = require('../config/env')
const jwt = require('jsonwebtoken')
const db = require('../models/index')
const { passHash } = require('../utils/bcrypt/PasswordBcrypt')

class AuthService {
    async sendRecoveryPass(user) {
        //TODO: logica de envio de email (nodemailer)
        const payload = { sub: user.id }
        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' })
        const instertToken = await user.update({ passRecovery: token})
        return { token }
    }

    async changePass(token, newPassword) {
        const verifyToken = jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if(err) {
                return err
            }

            return decoded
        })

        if (verifyToken instanceof Error || !verifyToken) {
            return {
                success: false,
                message: verifyToken.message || 'Error al verificar token'
            }
        }

        const user = await db.User.findByPk(verifyToken.sub)
        if (user.passRecovery !== token) {
            return {
                success: false,
                message: 'El token no coincide'
            }
        }

        const password = await passHash(newPassword)
        await user.update({ password: password, recoveryToken: null })

        return true

    }
}

module.exports = AuthService
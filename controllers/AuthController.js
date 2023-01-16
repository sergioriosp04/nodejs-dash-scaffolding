const { passHash, passVerify } = require('../utils/bcrypt/PasswordBcrypt')
const { singToken } = require('../utils/jwt/index')
const db = require('../models/index')

const AuthService = require('../services/AuthService')
const authService = new AuthService()

const localLogin = async(req, res, next) => {
    try {
        const user = req.user
        const jwtPayload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        }
        res.json({
            message : "",
            data: {
                user,
                jwt: singToken(jwtPayload)
            },
        })   
    } catch (error) {
        next(error)
    }
}

const profile = async(req, res, next) => {
    try {
        const { sub } = req.user
        const user = await db.User.findByPk(sub)
        delete user.dataValues.password

        res.json({
            message : "",
            data: {
                user,
            },
        })   
    } catch (error) {
        next(error)
    }
}

const recoveryPass = async(req, res, next) => {
    try {
        const { email } = req.body
        const user = await db.User.findOne({ where: { email: email } })
        if (!user) {
            return next({
                status: 400,
                message: 'Usuario no encontrado'
            })
        }
        const sendRecoveryPass = await authService.sendRecoveryPass(user)
        res.json({
            message: "email enviado",
            data: {
                recoveryToken: sendRecoveryPass.token
            }
        })
    } catch (err) {
        next(err)
    }
}

const changePass = async(req, res, next) => {
    try {  
        const { token, newPassword } = req.body
        const passChanged = await authService.changePass(token, newPassword)
        if (!passChanged || passChanged.success === false) {
            return next({
                status: 400,
                message: passChanged.message || "Error al cambiar la contraseña"
            })
        }

        res.json({
            message: "contraseña cambiada correctamente",
            data: { }
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { localLogin, profile, recoveryPass, changePass }
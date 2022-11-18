const { passHash, passVerify } = require('../utils/bcrypt/PasswordBcrypt')
const db = require('../models/index')

const get = async(req, res, next) => {
    try {
        const users = await db.User.findAll()
        res.json({
            message : "",
            data: users,
        })   
    } catch (error) {
        next(error)
    }
}

const create = async(req, res, next) => {
    try {
        /**todo: falta validacion de request (buscar buena libreria para validaciones) */
        const body = req.body
        body.password = await passHash(body.password)
        let user = await db.User.create(body)

        res.json({
            message : "",
            data: {
                id: user.id,
                email: user.email,
            },
        })   
    } catch (error) {
        next(error)
    }
}

module.exports = { create, get }
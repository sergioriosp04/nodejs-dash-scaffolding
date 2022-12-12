const { passHash, passVerify } = require('../utils/bcrypt/PasswordBcrypt')
const { singToken } = require('../utils/jwt/index')

const localLogin = async(req, res, next) => {
    try {
        const user = req.user
        const jwtPayload = {
            sub: user.id,
            email: user.username
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

module.exports = { localLogin }
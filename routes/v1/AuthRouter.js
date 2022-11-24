const express = require('express');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const router = express.Router();
const db = require('../../models/index')
const { passVerify } = require('../../utils/bcrypt/PasswordBcrypt')

passport.use(new LocalStrategy(async function verify(username, password, done) {
    try {
      email= username
      const user = await db.User.findOne({ where: { email }})
      if (!user) {
        return done({
            message: "El usuario no existe",
            status: 400,
        }, false)
      }
  
      const isMatch = await passVerify(password, user.password)
      if (!isMatch) {
        return done({
            message: "El usuario o contraseña incorrectos",
            status: 400,
        }, false)
      }
  
      delete user.dataValues.password
      return done(null, user)
  
    } catch (error) {
      return done(error, false)
    }  
  }))

router.post(
    '/local',
    passport.authenticate('local', {session: false}),
    async(req, res, next) => {
        try {
            res.json(req.body)
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;

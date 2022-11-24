const LocalStrategy = require('passport-local');
const db = require('../../../models/index')
const { passVerify } = require('../../bcrypt/PasswordBcrypt')

// const LocalStrategy = new Strategy({
//     usernameField: 'email',
//   },
//   async (email, password, done) => {
//     try {
//       const user = await db.User.findOne({ where: { email }})
//       if (!user) {
//         return done({}, false)
//       }

//       const isMatch = await passVerify(password, password)
//       if (!isMatch) {
//         return done({}, false)
//       }

//       delete user.dataValues.password
//       return done(null, user)
//     } catch (error) {
//       return done(error, false)
//     }
//   }
// );

// module.exports = LocalStrategy

const Strategy = new LocalStrategy(async function verify(username, password, done) {
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
})

module.exports = Strategy

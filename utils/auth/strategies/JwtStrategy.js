const { Strategy, ExtractJwt } = require('passport-jwt')
const config = require('../../../config/env')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}
const JwtStrategy = new Strategy(options, function(jwtPayload, done) {
  return done(null, jwtPayload)
})

module.exports = JwtStrategy

const passport = require('passport');
const LocalStrategy = require('./strategies/LocalStrategy');

passport.use(LocalStrategy);
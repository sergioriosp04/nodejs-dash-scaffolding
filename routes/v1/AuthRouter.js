const express = require('express');
const passport = require('passport');
const router = express.Router();
const AuthController = require('../../controllers/AuthController')


router.post(
    '/local',
    passport.authenticate('local', {session: false}),
    AuthController.localLogin
)

module.exports = router;

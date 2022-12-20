const express = require('express');
const passport = require('passport');
const router = express.Router();
const AuthController = require('../../controllers/AuthController')

router.post(
    '/local',
    passport.authenticate('local', {session: false}),
    AuthController.localLogin
)

router.post(
    '/recovery-pass',
    AuthController.recoveryPass
)

router.post(
    '/change-password',
    AuthController.changePass
)

module.exports = router;

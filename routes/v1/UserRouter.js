const express = require('express');
const passport = require('passport')
const router = express.Router();
const UserController = require('../../controllers/UserController')

router.get('/', passport.authenticate('jwt', {session: false }), UserController.get);
router.post('/', UserController.create);

module.exports = router;

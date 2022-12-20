const express = require('express');
const passport = require('passport')
const router = express.Router();
const UserController = require('../../controllers/UserController')
const { checkRole, checkRoles } = require('../../middlewares/RoleAndPermissionsHandler')

router.get(
    '/',
    passport.authenticate('jwt', {session: false }),
    checkRoles(['admin', 'user']),
    UserController.get
);
router.post('/', UserController.create);

module.exports = router;

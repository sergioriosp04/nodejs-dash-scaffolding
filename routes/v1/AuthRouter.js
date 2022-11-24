const express = require('express');
const passport = require('passport');
const router = express.Router();


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

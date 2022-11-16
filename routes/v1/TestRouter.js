const express = require('express');
const router = express.Router();
const db = require('../../models/index')

router.get('/', async (req, res, next) => {
  try {
    let response =  await db.TestDb.findAll()
    res.json({
        "success": "true",
        "message": "message",
        "data": response
    })
  } catch (error) {
  }
});

module.exports = router;

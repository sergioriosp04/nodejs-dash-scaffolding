const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json({
        "success": "true",
        "message": "test"
    })
  } catch (error) {
  }
});

router.get('/:id', async (req, res, next) => {
    try {
        console.log(id)
        res.json({
            "success": "true",
            "message": "test"
        })
    } catch (error) {
    }
  }
);


module.exports = router;

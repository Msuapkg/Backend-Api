const express = require('express');

const router = express.Router();

const { UserController } = require('../controlers');

router.post('/user',
    UserController.create)
module.exports = router


var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');

router.post('/register',userController.register);

router.post('/login',userController.checkCredentials);


module.exports = router;
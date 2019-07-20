var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');
var threadController=require('../controllers/thread.controller');

router.post('/create',userController.ensureAuthorizedUser,threadController.create);

router.get('/get_thread',userController.ensureAuthorizedUser,threadController.getThread);

router.get('/get_thread_one',userController.ensureAuthorizedUser,threadController.getThreadByUser);

router.get('/search',threadController.searchThread);


module.exports = router;
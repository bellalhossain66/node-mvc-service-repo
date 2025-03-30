const router = require('express').Router();
const userController = require('../controllers/userController');
const { 
    isValidUser,
    authMiddleware
 } = require('../middlewares/authMiddleware');

router.get('/user', authMiddleware, userController.getUsers);
router.post('/user', isValidUser, userController.createUser);

module.exports = router;
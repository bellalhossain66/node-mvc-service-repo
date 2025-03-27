const router = require('express').Router();
const userController = require('./controllers/userController');
const { isValidUser } = require('./middlewares/authMiddleware');

router.get('/user', isValidUser, userController.getUsers);
router.post('/user', isValidUser, userController.createUser);

module.exports = router;
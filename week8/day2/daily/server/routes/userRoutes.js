const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getUsers,
    getUserById,
    updateUserById
} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);

module.exports = router;

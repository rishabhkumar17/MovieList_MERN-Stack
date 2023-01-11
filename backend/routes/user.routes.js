const router = require('express').Router();

const {
  getUsers,
  userDetail,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
} = require('../controllers/user.controller');

router.post('/login', userLogin);
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', userDetail);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;

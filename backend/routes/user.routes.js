const router = require('express').Router();

const {
  getUsers,
  userDetail,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
} = require('../controllers/user.controller');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/search', searchUsers);
router.get('/:userId', userDetail);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;

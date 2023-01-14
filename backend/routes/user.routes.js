const router = require('express').Router();

const {
  getUsers,
  userDetail,
  createUser,
  updateUser,
  deleteUser,
  getQuery,
} = require('../controllers/user.controller');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', userDetail);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/search', getQuery);

module.exports = router;

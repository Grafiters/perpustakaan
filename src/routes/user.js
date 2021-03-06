const { Router } = require('express');
const {
  getAllUser,
  storeUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controller/user');
const UserRouter = new Router();

UserRouter.get('/', getAllUser)
  .post('/', storeUser)
  .get('/:id', getUserById)
  .put('/:id', updateUserById)
  .delete('/:id', deleteUserById);

module.exports = UserRouter;

import express from 'express';
import * as usersService from './user.service.js';
import { UserModel } from './user.model.js';
import status from 'http-status';

const router = express.Router();
const userModel = new UserModel();
router
  .route('/')
  .get(async (req, res) => {
    const user = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    if (user.length > 0) {
      res.json(
        user.map(value => {
          return { name: value.name, id: value.id, login: value.login };
        })
      );
    } else {
      res.json([]);
    }
  })
  .post(async (req, res) => {
    const user = await usersService.create(req.body);
    res.json(userModel.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const id = req.params.id;
    const user = await usersService.getById(id);
    if (user) {
      res.json(userModel.toResponse(user));
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const user = await usersService.updateUserById(req.body, id);
    if (user) {
      res.json(userModel.toResponse(user));
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const user = await usersService.deleteById(id);
    if (user) {
      res.sendStatus(status.NO_CONTENT);
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  });

const userRouter = router;

export { userRouter };

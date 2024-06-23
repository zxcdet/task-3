import * as taskService from './task.service.js';
import express from 'express';
import status from 'http-status';

const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(async (req, res) => {
    const id = req.params.boardId;
    const tasks = await taskService.getAll(id);
    if (tasks) {
      res.json(tasks);
    }
  })
  .post(async (req, res) => {
    const id = req.params.boardId;
    const tasks = await taskService.create(req.body, id);
    if (tasks) {
      res.json(tasks);
    }
  });

router
  .route('/:taskId')
  .get(async (req, res) => {
    const { boardId, taskId } = req.params;
    const tasks = await taskService.getById(req.body, boardId, taskId);
    if (tasks) {
      res.json(tasks);
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  })
  .put(async (req, res) => {
    const { boardId, taskId } = req.params;
    const tasks = await taskService.updateById(req.body, boardId, taskId);
    if (tasks) {
      res.json(tasks);
    }
  })
  .delete(async (req, res) => {
    const { boardId, taskId } = req.params;
    const tasks = await taskService.deleteById(req.body, boardId, taskId);
    // console.log(boardId);
    if (tasks) {
      res.sendStatus(status.OK);
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  });
const taskRouter = router;
export { taskRouter };

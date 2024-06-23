import express from 'express';
import * as boardService from './board.service.js';
import status from 'http-status';

const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardService.getAll();
    // map user fields to exclude secret fields like "password"
    if (boards.length > 0) {
      res.json(boards);
    } else {
      res.json([]);
    }
  })
  .post(async (req, res) => {
    const board = await boardService.create(req.body);
    res.json(board);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const id = req.params.id;
    const board = await boardService.getById(id);
    if (board) {
      res.json(board);
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const board = await boardService.updateById(req.body, id);
    if (board) {
      res.json(board);
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const board = await boardService.deleteById(id);
    if (board) {
      res.sendStatus(status.OK);
    } else {
      res.sendStatus(status.NOT_FOUND);
    }
  });

const boardRouter = router;

export { boardRouter };

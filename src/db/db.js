import { UserModel } from '../resources/users/user.model.js';
import { BoardModel } from '../resources/boards/board.model.js';
import { TaskModel } from '../resources/tasks/task.model.js';

const db = {};

const createUser = async user => {
  const users = new UserModel(user);

  if (db.users) {
    db.users.push(users);
  } else {
    db.users = [users];
  }
  return users;
};

const getByIdUser = async id => {
  if (db.users) {
    return db.users.find(val => val.id === id);
  }
  return null;
};

const updateByIdUser = async (body, id) => {
  if (db.users) {
    const index = db.users.findIndex(val => val.id === id);
    if (index > -1) {
      db.users[index] = { ...body, id: db.users[index].id };
    }
    return db.users.find(val => val.id === id);
  }
  return null;
};

const deleteByIdUser = async id => {
  const deletedUser = db.users.find(val => val.id === id);
  if (db.users && deletedUser) {
    if (db.tasks) {
      db.tasks = db.tasks.map(task => {
        if (task.userId === id) {
          return { ...task, userId: null };
        }
        return task;
      });
      db.users = db.users.filter(val => val.id !== id);
    }
    return deletedUser;
  }
  return null;
};

const findAllUsers = async () => {
  if (db.users) {
    return db.users;
  }
  return [];
};

const createBoard = async board => {
  const boards = new BoardModel(board);

  if (db.boards) {
    db.boards.push(boards);
  } else {
    db.boards = [boards];
  }
  return boards;
};

const getByIdBoard = async id => {
  if (db.boards) {
    return db.boards.find(val => val.id === id);
  }
  return null;
};

const deleteByIdBoard = async id => {
  const deletedBoard = db.boards.find(val => val.id === id);
  if (db.boards && deletedBoard) {
    if (db.tasks) {
      db.tasks = db.tasks.filter(val => val.boardId !== id);
    }
    db.boards = db.boards.filter(val => val.id !== id);
    return deletedBoard;
  }
  return null;
};

const updateByIdBoard = async (body, id) => {
  if (db.boards) {
    const index = db.boards.findIndex(val => val.id === id);
    if (index > -1) {
      db.boards[index] = { ...body, id: db.boards[index].id };
    }
    return db.boards.find(val => val.id === id);
  }
  return null;
};

const finAllBoards = async () => {
  if (db.boards) {
    return db.boards;
  }
  return [];
};

const getByIdTask = async (body, id, taskId) => {
  if (db.tasks) {
    return db.tasks.find(val => val.boardId === id && val.id === taskId);
  }
  return null;
};

const deleteByIdTask = async (body, id, taskId) => {
  const deletedTasks = db.tasks.find(val => val.id === taskId);
  if (db.tasks && deletedTasks) {
    db.tasks = db.tasks.filter(val => val.id !== taskId);
    return deletedTasks;
  }
  return null;
};

const updateByIdTask = async (body, id, taskId) => {
  if (db.tasks) {
    const index = db.tasks.findIndex(
      val => val.boardId === id && val.id === taskId
    );
    if (index > -1) {
      db.tasks[index] = { ...body, id: db.tasks[index].id };
    }
    return db.tasks.find(val => val.boardId === id && val.id === taskId);
  }
  return null;
};

const finAllTasks = async id => {
  if (db.tasks) {
    return db.tasks.filter(val => val.boardId === id);
  }
  return [];
};
const createTask = async (task, id) => {
  const tasks = new TaskModel(task, id);
  if (db.tasks) {
    db.tasks.push(tasks);
  } else {
    db.tasks = [tasks];
  }
  return tasks;
};
export {
  findAllUsers,
  createUser,
  getByIdUser,
  deleteByIdUser,
  updateByIdUser,
  getByIdBoard,
  createBoard,
  deleteByIdBoard,
  updateByIdBoard,
  finAllBoards,
  createTask,
  getByIdTask,
  deleteByIdTask,
  updateByIdTask,
  finAllTasks
};

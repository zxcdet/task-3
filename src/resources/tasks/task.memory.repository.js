import * as db from '../../db/db.js';

const getAll = async id => {
  return db.finAllTasks(id);
};
const getById = async (body, id, taskId) => {
  return db.getByIdTask(body, id, taskId);
};
const create = async (body, id) => {
  return db.createTask(body, id);
};
const deleteById = async (body, id, taskId) => {
  return db.deleteByIdTask(body, id, taskId);
};
const updateById = async (body, id, taskId) => {
  return db.updateByIdTask(body, id, taskId);
};

export { getAll, create, getById, deleteById, updateById };

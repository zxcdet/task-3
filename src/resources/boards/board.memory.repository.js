import * as db from '../../db/db.js';

const getAll = async () => {
  return db.finAllBoards();
};
const getById = async id => {
  return db.getByIdBoard(id);
};
const create = async body => {
  return db.createBoard(body);
};
const deleteById = async id => {
  return db.deleteByIdBoard(id);
};
const updateById = async (body, id) => {
  return db.updateByIdBoard(body, id);
};

export { getAll, create, getById, deleteById, updateById };

import * as db from '../../db/db.js';

const getAll = async () => {
  return db.findAllUsers();
};
const getById = async id => {
  return db.getByIdUser(id);
};
const create = async body => {
  return db.createUser(body);
};
const deleteById = async id => {
  return db.deleteByIdUser(id);
};
const updateById = async (body, id) => {
  return db.updateByIdUser(body, id);
};

export { getAll, create, getById, deleteById, updateById };

import * as usersRepo from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();
const create = body => usersRepo.create(body);
const getById = id => usersRepo.getById(id);
const deleteById = id => usersRepo.deleteById(id);
const updateUserById = (body, id) => usersRepo.updateById(body, id);

export { getAll, create, getById, deleteById, updateUserById };

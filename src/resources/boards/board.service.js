import * as boardsRepo from './board.memory.repository.js';

const getAll = () => boardsRepo.getAll();
const create = body => boardsRepo.create(body);
const getById = id => boardsRepo.getById(id);
const deleteById = id => boardsRepo.deleteById(id);
const updateById = (body, id) => boardsRepo.updateById(body, id);

export { getAll, create, getById, deleteById, updateById };

import * as taskRepo from './task.memory.repository.js';

const getAll = id => taskRepo.getAll(id);
const create = (body, id) => taskRepo.create(body, id);
const getById = (body, id, taskId) => taskRepo.getById(body, id, taskId);
const deleteById = (body, id, taskId) => taskRepo.deleteById(body, id, taskId);
const updateById = (body, id, taskId) => taskRepo.updateById(body, id, taskId);

export { getAll, create, getById, deleteById, updateById };

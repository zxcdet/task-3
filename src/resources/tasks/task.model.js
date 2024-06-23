import { v7 as uuidv7 } from 'uuid';

class TaskModel {
  constructor({ title, order, description, userId, columnId } = {}, id) {
    this.id = uuidv7();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = id;
    this.columnId = columnId;
  }

  toResponse(task) {
    if (task) {
      return {
        id: task.id,
        title: task.title,
        order: task.order,
        description: task.description,
        userId: task.userId
      };
    }
    return {};
  }
}

export { TaskModel };

import { v7 as uuidv7 } from 'uuid';

class BoardModel {
  constructor({ title, columns } = {}) {
    this.id = uuidv7();
    this.title = title;
    this.columns = columns.map(val => {
      return {
        ...val,
        id: uuidv7()
      };
    });
  }
}

export { BoardModel };

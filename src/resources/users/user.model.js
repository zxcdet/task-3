import { v7 as uuidv7 } from 'uuid';

class UserModel {
  constructor({ name, login, password } = {}) {
    this.id = uuidv7();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  toResponse(user) {
    if (user) {
      return {
        id: user.id,
        name: user.name,
        login: user.login
      };
    }
    return {};
  }
}

export { UserModel };

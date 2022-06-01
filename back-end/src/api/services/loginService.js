const User = require('../../database/models/index');

class LoginService {
  constructor(model = User) {
    this.model = model;
  }

  async getUser(email, password) {
    const user = await this.model.findOne({ where: { email } })
    if (!user) return null;
    if (user.password !== password) return null;
    return user;
  }
}

module.exports = LoginService;



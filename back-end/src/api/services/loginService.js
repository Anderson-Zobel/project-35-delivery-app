const  User  = require('../../database/models/index');

class LoginService {
  // constructor(userModel = User) {

  async getUser(email) {
    console.log(User);
    // return user;
  }
}

module.exports = LoginService;



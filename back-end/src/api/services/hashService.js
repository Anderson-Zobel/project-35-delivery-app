const md5 = require('md5');

class HashService{
  constructor(){
    this.md5 = md5;
  }

  generateHash(password){
    return this.md5(password);
  }
}

module.exports = HashService;
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const typeorm_1 = require('typeorm')
const TypeUser_1 = require('../entity/TypeUser')
class User1555962567987 {
  async up (queryRunner) {
    let typeUser = new TypeUser_1.default()
    typeUser.privilegesTypeUser = 'administrador'
    const repositoryTypeUser = typeorm_1.getRepository(TypeUser_1.default)
    await repositoryTypeUser.save(typeUser)
  }
  async down (queryRunner) {
  }
}
exports.User1555962567987 = User1555962567987
// # sourceMappingURL=1555962567987-User.js.map

'use strict'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length; var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc; var d
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc)
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
  return c > 3 && r && Object.defineProperty(target, key, r), r
}
Object.defineProperty(exports, '__esModule', { value: true })
const typeorm_1 = require('typeorm')
const User_1 = require('./User')
let TypeUser = class TypeUser {
}
__decorate([
  typeorm_1.PrimaryGeneratedColumn()
], TypeUser.prototype, 'idTypeUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 30 })
], TypeUser.prototype, 'privilegesTypeUser', void 0)
__decorate([
  typeorm_1.OneToMany(type => User_1.default, user => user.typeUser)
], TypeUser.prototype, 'user', void 0)
TypeUser = __decorate([
  typeorm_1.Entity()
], TypeUser)
exports.default = TypeUser
// # sourceMappingURL=TypeUser.js.map

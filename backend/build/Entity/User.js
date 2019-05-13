'use strict'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length; var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc; var d
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc)
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
  return c > 3 && r && Object.defineProperty(target, key, r), r
}
Object.defineProperty(exports, '__esModule', { value: true })
const typeorm_1 = require('typeorm')
const TypeUser_1 = require('./TypeUser')
let User = class User {
}
__decorate([
  typeorm_1.PrimaryGeneratedColumn('uuid')
], User.prototype, 'idUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 50 })
], User.prototype, 'nameUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 50 })
], User.prototype, 'lastNameUser', void 0)
__decorate([
  typeorm_1.Column('date')
], User.prototype, 'birthDateUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 12 })
], User.prototype, 'identificationUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 60 })
], User.prototype, 'emailUser', void 0)
__decorate([
  typeorm_1.Column('varchar', { length: 40 })
], User.prototype, 'passwordUser', void 0)
__decorate([
  typeorm_1.ManyToOne(type => TypeUser_1.default, typeUser => typeUser.user)
], User.prototype, 'typeUser', void 0)
User = __decorate([
  typeorm_1.Entity()
], User)
exports.default = User
// # sourceMappingURL=User.js.map

'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const typeorm_1 = require('typeorm')
const TypeUser_1 = require('../entity/TypeUser')
const userRoute = express_1.Router()
/***
 * Endpoints
 */
userRoute.get('/indexUser', async (request, response) => {
  try {
    let typeUser = new TypeUser_1.default()
    typeUser.privilegesTypeUser = 'adminstrador'
    await typeorm_1.getRepository(TypeUser_1.default).save(typeUser).then(async (data) => {
      response.status(200).json(({
        data
      }))
    }).catch((error) => {
      response.status(404).json({
        error
      })
    })
  } catch (error) {
    console.log(error)
  }
})
exports.default = userRoute
// # sourceMappingURL=UserRoute.js.map

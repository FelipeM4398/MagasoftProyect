'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * Modulos
 */
const Express = require('express')
const BodyParser = require('body-parser')
const Morgan = require('morgan')
const typeorm_1 = require('typeorm')
const UserRoute_1 = require('./Routes/UserRoute')
/**
* Herencia de express
*/
const app = Express()
/**
*Port
*/
const PORT = 3000
/**
*Middleware
*/
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(Morgan('dev'))
app.use('/user', UserRoute_1.default)
/****
 *Routes
 */
/**
*Servidor
*/
typeorm_1.createConnection().then(async (connection) => {
  const server = app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
}).catch((error) => console.log(error))
// # sourceMappingURL=index.js.map

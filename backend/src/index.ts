/**
 * Modulos
 */
import Express from 'express';
import BodyParser from 'body-parser';
import Morgan from 'morgan';
import { createConnection } from 'typeorm';
import adminstratorRoutes from './Routes/AdministratorRoutes';
import Cors from 'cors';
/**
* Herencia de express 
*/
const app = Express()
/**
*Port
*/
const PORT = 3000;

/***
 * Conf Cors
 */
const corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200
 } 
/**
*Middleware
*/
app.use(Cors(corsOptions))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Morgan('dev'));

/****
 *Routes 
 */
app.use('/adminstrator', adminstratorRoutes);

/**
*Servidor
*/
createConnection().then(async (connection) => connection)	.catch((error) => console.log(error));

export default app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
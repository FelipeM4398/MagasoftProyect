/**
 * Modulos
 */
import Express from 'express';
import BodyParser from 'body-parser';
import Morgan from 'morgan';
import { createConnection } from 'typeorm';
import adminstratorRoutes from './Routes/AdministratorRoutes';
import Cors from 'cors';
import authRouter from './Routes/AuthRoute';
import AuthToken from './middlewares/AuthToken';
import authorRouter from './Routes/AuthortRoute';
import CommitteMemberRouter from './Routes/CommitteeMemberRoute';
/**
* Herencia de express 
*/
const app = Express();
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
};
/**
*Middleware
*/
app.use(Cors(corsOptions));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Morgan('dev'));

/****
 *Routes 
 */
app.use('/auth', authRouter);
app.use(AuthToken);
app.use('/adminstrator', adminstratorRoutes);
app.use('/author', authorRouter);
app.use('/committeeMember', CommitteMemberRouter);
/**
*Servidor
*/
createConnection().then(async (connection) => connection).catch((error) => console.log(error));

export default app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

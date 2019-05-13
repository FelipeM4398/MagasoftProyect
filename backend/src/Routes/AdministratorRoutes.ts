/****
 * Modules
 */
import { Router, Request, Response } from 'express';
import AdministratorService from "../Services/AdministratorService";
import User from '../entity/UserEntity';


/****
 * Instances
 */
const administratorRouter = Router();
const administratorService = new AdministratorService();

/****
 * Message general
 */
const handleMessage = (response, code, message) => response.status(code).json({ message });



/*****
 * Endpoints
 */

/****
  * Endpoint for create author
  */
 administratorRouter.post('/createUser', async (request: Request, response: Response, next) => {
	let { nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser, hodbed, typeUser, linkCvlackEvaluator, levelEducationEvaluator } = request.body;
     
    try {       
        const typeUserData = await administratorService.consultTypeUser(typeUser);
        const hodBedData = await administratorService.consultHotService(hodbed);
        await administratorService.createUser(nameUser.toLocaleUpperCase(), lastNameUser.toLocaleUpperCase(), birthDateUser, identificationUser, emailUser, passwordUser, hodBedData, typeUserData, levelEducationEvaluator.toLocaleUpperCase(),  linkCvlackEvaluator);
		await handleMessage(response, 200, 'Created user');
	} catch (error) {
		handleMessage(response, 401, 'Error when creating the user');
	}
});

/****
 * Endpoint for view users
 */
administratorRouter.get('/getUsers', async (request: Request, response: Response, next) => {
    try {
        const data = await administratorService.getUsers(User);
        handleMessage(response, 200, data);
    } catch (error) {
        handleMessage(response, 404, 'Error users')
    }
}) 

/****
 * Endpoint for view user
 */
administratorRouter.get('/getUser/:identificationUser', async (request: Request, response: Response, next) => {
    const {identificationUser} = request.params;
    try {
        const data = await administratorService.consultgetUser(identificationUser);
        handleMessage(response, 200, data);
    } catch (error) {
        handleMessage(response, 404, 'Error users')
    }
}) 


export default administratorRouter;

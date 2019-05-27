/****
 * Modules
 */
import { Router, Request, Response } from 'express';
import AdministratorService from "../Services/AdministratorService";
import User from '../entity/UserEntity';
import { type } from 'os';


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
    console.log(typeUser)
    try {       
        const typeUserData = await administratorService.consultTypeUser(typeUser);
        console.log(typeUserData);
        const hodBedData = await administratorService.consultHotService(hodbed);
        await administratorService.createUser(nameUser.toLocaleUpperCase(), lastNameUser.toLocaleUpperCase(), birthDateUser, identificationUser, emailUser, passwordUser, hodBedData, typeUserData, levelEducationEvaluator.toLocaleUpperCase(),  linkCvlackEvaluator);
		await handleMessage(response, 200, 'Created user');
	} catch (error) {
        console.log(error);
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
        handleMessage(response, 404, 'not found')
    }
}) 


/*****
 * Endpoint for create categories
 */
administratorRouter.post('/createCategory',(async (request: Request, response: Response, next) =>{
    const {nameCategory} = request.body;
    try {
        await administratorService.createCategory(nameCategory);
        handleMessage(response, 201, 'Category created');
    } catch (error) {
        handleMessage(response, 201, 'error to the category created');
    }
}))


/****
 * Endpoint for view categories
 */
administratorRouter.get('/getCategories', async (request: Request, response: Response, next) => {
    try {
        const data = await administratorService.viewCategories();
        handleMessage(response, 200, data);
    } catch (error) {
        handleMessage(response, 404, 'not found ')
    }
}) 


export default administratorRouter;

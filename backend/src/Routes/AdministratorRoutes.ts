/****
 * Modules
 */
import { Router, Request, Response } from 'express';
import AdministratorService from "../Services/AdministratorService";
import User from '../entity/UserEntity';
import QuestionService from '../Services/QuestionService';


/****
 * Instances
 */
const administratorRouter = Router();
const administratorService = new AdministratorService();
const questionService = new QuestionService();
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

/*****
 * Endpoint for create categories
 */
administratorRouter.post('/createQuestion',(async (request: Request, response: Response, next) =>{
    const {descriptionQuestion, nameCategory} = request.body;
    try {
        const category = await administratorService.viewCategoriy(nameCategory);
        await questionService.createQuestion(descriptionQuestion, category);
        handleMessage(response, 201, 'Category question');
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

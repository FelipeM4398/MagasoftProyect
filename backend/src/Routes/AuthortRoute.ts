/***
 * Modules
 */
import { Router, Request, Response } from 'express';
import ArticleService from '../Services/ArticleService';
import UserService from '../Services/UserService';
import fs from 'fs';
/**
 * Instances
 */
const authorRouter = Router();
const articleService = new ArticleService();
const userService = new UserService();
/****
 * Message general
 */
const handleMessage = (response, code, message) => response.status(code).json({ message });

/****
 * Endpoinst
 */

/****
* Endpoint for post Router
*/

authorRouter.post('/createArticle', async (request: Request, response: Response, next) => {
    const { title, description, publicationDate, userIdUser, typeUser, nameCategory, urlFile } = request.body;
	try {
		const category = await articleService.viewCategory(nameCategory);
		fs.writeFile(urlFile, 'base64', (err) => {
			if (err) {
			  console.log(err);
			} else {	
				console.log('guardado');
				
			}
		  });
		await articleService.createArticle(title, description, publicationDate, userIdUser, typeUser, category, urlFile);
		handleMessage(response, 202, 'Article created');
	} catch (error) {
		console.log(error)
		handleMessage(response, 404, 'Error not found');
	}
});

/****
 * Endpoint for view article
 */
authorRouter.post('/ViewArticle', async (request: Request, response: Response, next) => {
    const { email } = request.body;
	try {
		const data = await articleService.viewArticles(email);
		handleMessage(response, 202, data);
	} catch (error) {
		handleMessage(response, 404, 'Error not found');
	}
});


/*****
 * Endpoint for update info User
 */
authorRouter.patch('/updateInfo', async (request: Request, response: Response, next) => {
	const {nameUser, lastNameUser, birthDateUser, identificationUser} = request.body;
	try {
		console.log(nameUser, identificationUser)
		await userService.uptadeUser(nameUser, lastNameUser, birthDateUser, identificationUser)
		handleMessage(response, 201, 'updated info')
	} catch (error) {
		console.log(error)
		handleMessage(response, 404, 'Error update info')
	}
})
/****
 * Endpoint for view info
 */
authorRouter.post('/viewInfo',  async (request: Request, response: Response, next) => {
	const {identificationUser} = request.body;
	try {
		const data = await userService.infoUser(identificationUser);
		handleMessage(response, 200, data);
	} catch (error) {
		handleMessage(response, 404, 'Error user not found')
	}
})

/****
 * Endpoint for view article review
 */
authorRouter.post('/viewArticleReview',  async (request: Request, response: Response, next) => {
	const {identificationUser} = request.body;
	try {
		const userInfo = await userService.infoUser(identificationUser);
		const data = await articleService.viewReviewArticles(userInfo.idUser);
		handleMessage(response, 200, data);
	} catch (error) {
		handleMessage(response, 404, 'Error user not found')
	}
})

export default authorRouter;

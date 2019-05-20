/***
 * Modules
 */
import { Router, Request, Response } from 'express';
import User from '../entity/UserEntity';
import ArticleService from '../Services/ArticleService';

/**
 * Instances
 */
const authorRouter = Router();
const articleService = new ArticleService();

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
    const { title, description, publicationDate, userIdUser, typeUser } = request.body;
	try {
		await articleService.createArticle(title, description, publicationDate, userIdUser, typeUser);
		handleMessage(response, 202, 'Article created');
	} catch (error) {
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

export default authorRouter;

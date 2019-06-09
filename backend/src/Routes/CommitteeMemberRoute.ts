/***
 * Modules
 */
import { Router, Request, Response } from 'express';
import ArticleService from '../Services/ArticleService';
import UserService from '../Services/UserService';
import CommitteeMemberService from '../Services/CommitteeMemberService';
/**
 * Instances
 */
const CommitteMemberRouter = Router();
const articleService = new ArticleService();
const userService = new UserService();
const committeService = new CommitteeMemberService();
/****
 * Message general
 */
const handleMessage = (response, code, message) => response.status(code).json({ message })

/****
 * Endpoinst
 */
/***
 * Endpoint for create article Review
 */
CommitteMemberRouter.post('/createArticleReview', async (request: Request, response: Response, next) => {
    const {dateReceivedArticleReview, stateArticleReview, observationArticleReview, titleArticle, identificationUser} = request.body;
    try {
        const userInfo = await userService.infoUser(identificationUser);
        const articleInfo = await articleService.viewArticlesbyIddentifaction(userInfo.idUser, titleArticle);
        const { idArticle } = articleInfo[0];
        await committeService.createArticleReview(dateReceivedArticleReview, stateArticleReview, observationArticleReview, userInfo.idUser, idArticle);
        handleMessage(response, 202, 'Created article review');
    } catch (error) {
        console.log(error)
        handleMessage(response, 404, 'Error for created article review')
    }
})

export default CommitteMemberRouter; 
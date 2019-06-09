/***
 * Modules
 */
import { Router, Request, Response } from 'express';
import ArticleService from '../Services/ArticleService';
import UserService from '../Services/UserService';
import fs from 'fs';
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
CommitteMemberRouter.post('/createArticleReview', async (request: Request, response: Response, next) => {
    const {dateReceivedArticleReview, stateArticleReview, observationArticleReview, userIdUser} = request.body;
    try {
        const userInfo = await userService.infoUser(userIdUser);
        const articleInfo = await articleService.viewArticlesbyIddentifaction(userIdUser);
        await committeService.createArticleReview(dateReceivedArticleReview, stateArticleReview, observationArticleReview, userInfo, articleInfo);
        handleMessage(response, 202, 'Created article review');
    } catch (error) {
        handleMessage(response, 404, 'Error for created article review')
    }
})

export default CommitteMemberRouter;
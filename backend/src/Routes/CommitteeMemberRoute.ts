/***
 * Modules
 */
import { Router, Request, Response } from 'express';
import ArticleService from '../Services/ArticleService';
import UserService from '../Services/UserService';
import CommitteeMemberService from '../Services/CommitteeMemberService';
import QuestionService from '../Services/QuestionService';
/**
 * Instances
 */
const CommitteMemberRouter = Router();
const articleService = new ArticleService();
const userService = new UserService();
const committeService = new CommitteeMemberService();
const questions = new QuestionService();
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
        if (userInfo === undefined ) {
            handleMessage(response, 202, 'user not found');
        } else {
            const articleInfo = await articleService.viewArticlesbyIddentifaction(userInfo.idUser, titleArticle);
            if (Object.keys(articleInfo).length === 0 && Object.keys(articleInfo).length === 0 ) {
                handleMessage(response, 202, 'article not found');
            }
            else {
                const { idArticle } = articleInfo[0];
                await committeService.createArticleReview(dateReceivedArticleReview, stateArticleReview, observationArticleReview, userInfo.idUser, idArticle);
                handleMessage(response, 202, 'Created article review');
            }
        }
    } catch (error) {
        console.log(error)
        handleMessage(response, 404, 'Error for created article review')
    }
})

/***
 * Endpoint for update article Review
 */
CommitteMemberRouter.patch('/UpdateArticleReview', async (request: Request, response: Response, next) => {
    const {stateArticleReview, titleArticle, identificationUser} = request.body;
    try {
        const userInfo = await userService.infoUser(identificationUser);
        if (userInfo === undefined ) {
            handleMessage(response, 202, 'user not found');
        } else {
            const articleInfo = await articleService.viewArticlesbyIddentifaction(userInfo.idUser, titleArticle);
            if (Object.keys(articleInfo).length === 0 && Object.keys(articleInfo).length === 0 ) {
                handleMessage(response, 202, 'article not found');
            }
            else {
                const { idArticle } = articleInfo[0];
                await committeService.updateArticleReview(stateArticleReview, userInfo.idUser, idArticle);
                handleMessage(response, 202, 'updating article review');
            }
        }
    } catch (error) {
        console.log(error)
        handleMessage(response, 404, 'Error for created article review')
    }
})


/***
 * Endpoint for create evaluation article
 */
CommitteMemberRouter.post('/createEvaluationArticle', async (request: Request, response: Response, next) => {
    const {observationEvaluation, quealificationEvaluation, dateReceivedEvaluation, dateSendEvaluation, titleArticle, identificationUser} = request.body;
    try {
        const userInfo = await userService.infoUser(identificationUser);
        if (userInfo === undefined ) {
            handleMessage(response, 202, 'user not found');
        } else {
            const articleInfo = await articleService.viewArticlesbyIddentifaction(userInfo.idUser, titleArticle);
            if (Object.keys(articleInfo).length === 0 && Object.keys(articleInfo).length === 0 ) {
                handleMessage(response, 202, 'article not found');
            }
            else {
                const { idArticle } = articleInfo[0];
                await committeService.createEvaluationArticle(observationEvaluation, quealificationEvaluation, dateReceivedEvaluation, dateSendEvaluation, idArticle, userInfo.idUser);
                handleMessage(response, 202, 'created evaluation review');
            }
        }
    } catch (error) {
        console.log(error)
        handleMessage(response, 404, 'Error for created article review')
    }
})

CommitteMemberRouter.get('/viewQuestions', async (request: Request, response: Response, next) => {
    try {
        const data = await questions.getQuestions();
        handleMessage(response, 200, data);
    } catch (error) {
        handleMessage(response, 404, 'Error for view question')

    }
})

export default CommitteMemberRouter; 
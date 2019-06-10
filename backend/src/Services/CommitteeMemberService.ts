import { getConnection } from 'typeorm';
import ArticleReview from '../entity/articleReviewEntity';
import EvaluationArticle from '../entity/EvaluationArticleEntity';



export default class CommitteeMemberService {

    constructor() {}

    /**
     * Method for create article review
     * @param dateReceivedArticleReview 
     * @param stateArticleReview 
     * @param observationArticleReview 
     * @param articleInfo 
     * @param userIdUser 
     */
    async createArticleReview(dateReceivedArticleReview, stateArticleReview, observationArticleReview, userIdUser, articleInfo) {
        const articleReview = new ArticleReview();
        articleReview.dateReceivedArticleReview = dateReceivedArticleReview;
        articleReview.stateArticleReview = stateArticleReview;
        articleReview.observationArticleReview = observationArticleReview;
        articleReview.article = articleInfo;
        articleReview.user = userIdUser;
        await getConnection().manager.save(articleReview);
    }

    /**
     * Method for update article review
     * @param stateArticleReview 
     * @param userIdUser 
     * @param articleIdArticle 
     */
    async updateArticleReview(stateArticleReview, userIdUser, articleIdArticle) {
        return getConnection().query(`UPDATE article_review SET stateArticleReview=? WHERE userIdUser=? and articleIdArticle=?`, [stateArticleReview, userIdUser, articleIdArticle])

    }

    /**
     * Method for create evaluation
     * @param observationEvaluation 
     * @param quealificationEvaluation 
     * @param dateReceivedEvaluation 
     * @param dateSendEvaluation 
     * @param articleIdArticle 
     * @param userIdUser 
     */
    async createEvaluationArticle(observationEvaluation, quealificationEvaluation, dateReceivedEvaluation, dateSendEvaluation, articleIdArticle, userIdUser) {
        const evaluationArticle = new EvaluationArticle();
        evaluationArticle.observationEvaluation = observationEvaluation;
        evaluationArticle.quealificationEvaluation = quealificationEvaluation;
        evaluationArticle.dateReceivedEvaluation = dateReceivedEvaluation;
        evaluationArticle.dateSendEvaluation = dateSendEvaluation;
        evaluationArticle.article = articleIdArticle;
        evaluationArticle.user = userIdUser;
        await getConnection().manager.save(evaluationArticle);

    }
    

    
}
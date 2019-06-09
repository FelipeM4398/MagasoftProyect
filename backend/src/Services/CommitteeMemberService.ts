import { getConnection } from 'typeorm';
import ArticleReview from '../entity/articleReviewEntity';



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
        console.log(articleReview)
        await getConnection().manager.save(articleReview);

    }

}
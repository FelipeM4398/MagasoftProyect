import { getConnection } from 'typeorm';
import ArticleReview from '../entity/articleReviewEntity';



export default class CommitteeMemberService {

    constructor() {}

    async createArticleReview(dateReceivedArticleReview, stateArticleReview, observationArticleReview, articleInfo, userIdUser) {
        const articleReview = new ArticleReview();
        articleReview.dateReceivedArticleReview = dateReceivedArticleReview;
        articleReview.stateArticleReview = stateArticleReview;
        articleReview.observationArticleReview = observationArticleReview;
        articleReview.article = articleInfo;
        articleReview.user = userIdUser;
        await getConnection().manager.save(articleReview);

    }

}
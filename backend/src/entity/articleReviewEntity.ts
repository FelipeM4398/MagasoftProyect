import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import Article from './ArticleEntity';
import QuestionReview from './QuestionReviewEntity';
import User from './UserEntity';


@Entity()
export default class ArticleReview {

    @PrimaryGeneratedColumn()
    idArticleReview: number

    @Column("date")
    dateReceivedArticleReview: Date

    @Column("varchar", {length: 40})
    stateArticleReview: String

    @Column("text")
    observationArticleReview

    @ManyToOne(type => Article, article => article.articleReview)
    article: Article

    @ManyToOne(type => User, user => user.articleReview)
    user: User

    @OneToMany(type => QuestionReview, questionReview => questionReview.articleReview)
    questionReview: QuestionReview[]

}
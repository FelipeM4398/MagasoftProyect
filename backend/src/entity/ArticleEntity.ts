import {PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import EvaluationArticle from './EvaluationArticleEntity';
import ArticleReview from './articleReviewEntity';
import User from './UserEntity';
import Category from './CategoryEntity';

@Entity()
export default class Article {

    @PrimaryGeneratedColumn()
    idArticle: number

    @Column("varchar", {length: 60})
    title: String

    @Column("text")
    description

    @Column("date")
    publicationDate: Date

    @Column("text")
    urlFile

    @ManyToOne(type => User, user => user.article)
    user: User

    @OneToMany(type => EvaluationArticle, evaluationArticle => evaluationArticle.article)
    evaluationArticle: EvaluationArticle[]

    @OneToMany(type => ArticleReview, articleReview => articleReview.article)
    articleReview: ArticleReview[]

    @ManyToMany(type => Category)
    @JoinTable()
    category: Category[];
    
}
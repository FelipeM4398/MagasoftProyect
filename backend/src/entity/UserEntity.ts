import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import TypeUser from './TypeUserEntity';
import Hotbed from './HotbedEntity';
import Article from './ArticleEntity';
import ArticleReview from './articleReviewEntity';
import EvaluationArticle from './EvaluationArticleEntity';

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    idUser: Number; 

    @Column("varchar", {length: 50})
    nameUser: String

    @Column("varchar", {length: 50})
    lastNameUser: String

    @Column("date")
    birthDateUser: Date

    @Column("varchar", {length: 14})
    identificationUser: String

    @Column("varchar", {length: 90})
    emailUser: String

    @Column("varchar", {length: 90})
    passwordUser: String

    @Column("varchar",
    {length: 30,
    nullable: true})
    levelEducationEvaluator: string

    @Column("varchar",
    {length: 200,
    nullable: true})
    linkCvlackEvaluator: string

    @ManyToOne((type) => TypeUser, (typeUser) => typeUser.user)
    typeUser: TypeUser;
    
    @ManyToOne(type => Hotbed, hodbed => hodbed.user)
    hodbed: Hotbed

    @OneToMany(type => Article, article => article.user)
    article: Article[]
    
    @OneToMany(type => ArticleReview, articleReview => articleReview.article)
    articleReview: ArticleReview[]

    @OneToMany(type => EvaluationArticle, evaluationArticle => evaluationArticle.article)
    evaluationArticle: EvaluationArticle[]

}
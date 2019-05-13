import {PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany} from 'typeorm';
import Article from './ArticleEntity';
import QuestionEvaluation from './QuestionEvaluationEntity';
import User from './UserEntity';

@Entity()
export default class EvaluationArticle {

    @PrimaryGeneratedColumn()
    idEvaluation: number

    @Column("text")
    observationEvaluation

    @Column("int")
    quealificationEvaluation: number

    @Column("date")
    dateReceivedEvaluation: Date

    @Column("date", {nullable: false})
    dateSendEvaluation: Date

    @ManyToOne(type => Article, article => article.evaluationArticle)
    article: Article

    @ManyToOne(type => User, user => user.evaluationArticle)
    user: User

    @OneToMany(type => QuestionEvaluation, questionEvaluation => questionEvaluation.evaluationArticle)
    questionEvaluation: QuestionEvaluation[]

}

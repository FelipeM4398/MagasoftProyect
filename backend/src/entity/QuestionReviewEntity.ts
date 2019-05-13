import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import Question from './QuestionEntity';
import ArticleReview from './articleReviewEntity';



@Entity()
export default class QuestionReview {

    @PrimaryGeneratedColumn()
    idQuestionReview

    @Column('text')
    ObservationQuestionReview

    @Column('int')
    qualificationQuestionReview

    @ManyToOne(type => Question, question => question.questionReview)
    question: Question

    @ManyToOne(type => ArticleReview, articleReview => articleReview.questionReview)
    articleReview: ArticleReview

}
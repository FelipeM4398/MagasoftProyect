import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import EvaluationArticle from './EvaluationArticleEntity';
import Question from './QuestionEntity';



@Entity()
export default class QuestionEvaluation {

    @PrimaryGeneratedColumn()
    idQuestionEvaluation

    @Column('text')
    justificationQuestionEvaluation

    @Column('int')
    qualificationQuestionEvaluation
   
    @ManyToOne(type => EvaluationArticle, evaluationArticle => evaluationArticle.questionEvaluation)
    evaluationArticle: EvaluationArticle

    @ManyToOne(type => Question, question => question.questionEvaluation)
    question: Question

}
import { PrimaryGeneratedColumn, Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import Category from './CategoryEntity';
import QuestionEvaluation from './QuestionEvaluationEntity';
import QuestionReview from './QuestionReviewEntity';


@Entity()
export default class Question {

    @PrimaryGeneratedColumn()
    idQuestion: number

    @Column('text')
    descriptionQuestion

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[];

    @OneToMany(type => QuestionEvaluation, questionEvaluation => questionEvaluation.question)
    questionEvaluation: QuestionEvaluation[]

    @OneToMany(type => QuestionReview, questionReview => questionReview.question)
    questionReview: QuestionReview[]

}
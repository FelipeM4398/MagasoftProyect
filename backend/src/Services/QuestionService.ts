import { getConnection } from 'typeorm';
import Question from '../entity/QuestionEntity';


export default class QuestionService {
    constructor() {}

    async createQuestion(description, category) {
        const question = new Question();
        question.descriptionQuestion = description;
        question.categories = [category];
        await getConnection().manager.save(question);
    }

    async getQuestions() {
        return getConnection().getRepository(Question).find({});
    }

}

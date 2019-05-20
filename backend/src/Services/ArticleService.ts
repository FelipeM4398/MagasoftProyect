import Article from '../entity/ArticleEntity';
import User from '../entity/UserEntity';
import { getConnection } from 'typeorm';

export default class ArticleService {
	constructor() {}

	/**
	 *
	 * Method for create article
	 * @param {*} title
	 * @param {*} description
	 * @param {*} publicationDate
	 * @param {*} user
	 * @param {string} typeUser
	 * @returns
	 * @memberof ArticleService
	 */
	createArticle(title, description, publicationDate, user, typeUser: string) {
		if (typeUser.toLocaleUpperCase() === 'AUTOR') {
			return getConnection()
				.createQueryBuilder()
				.insert()
				.into(Article)
				.values({ title, description, publicationDate, user })
				.execute();
		}
	}

	/**
	 *Method for view Articles of author
	 *
	 * @param {*} email
	 * @returns
	 * @memberof ArticleService
	 */
	viewArticles(email) {
			return getConnection().query(`SELECT * FROM user u, article ar WHERE u.emailUser=? and u.idUser=ar.userIdUser`, [email])
	}
}

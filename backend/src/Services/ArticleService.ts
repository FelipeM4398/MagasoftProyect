import Article from '../entity/ArticleEntity';
import { getConnection } from 'typeorm';
import Category from '../entity/CategoryEntity';

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
	async createArticle(title, description, publicationDate, user, typeUser: string, categoryFind: Category, urlFile) {
		if (typeUser.toLocaleUpperCase() === 'AUTHOR') {	
			const article = new Article();
			article.title = title;
			article.description = description;
			article.publicationDate = publicationDate;
			article.user = user;
			article.urlFile = urlFile;
			article.category = [categoryFind];
			await getConnection().manager.save(article);
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

	/**
	 *Method for view Articles of author
	 *
	 * @param {*} email
	 * @returns
	 * @memberof ArticleService
	 */
	viewArticlesbyIddentifaction(userIdUser) {
		return getConnection().query(`SELECT * FROM user u, article ar WHERE u.idUser=? and u.idUser=ar.userIdUser`, [userIdUser])
	  }

	/**
	 *
	 * Method for view view Categories
	 * @returns
	 * @memberof AdministratorService
	 */
	viewCategory(nameCategory) {
		return getConnection().getRepository(Category).createQueryBuilder("category").where("category.nameCategory = :nameCategory", {nameCategory}).getOne();
	}

}

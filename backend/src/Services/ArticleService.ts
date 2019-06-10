import Article from '../entity/ArticleEntity';
import { getConnection } from 'typeorm';
import Category from '../entity/CategoryEntity';
import ArticleReview from '../entity/articleReviewEntity';

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
		if (typeUser.toLocaleUpperCase() === 'AUTOR') {	
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
	viewArticlesbyIddentifaction(idUser, title) {
		return getConnection().getRepository(Article).find({ user: {idUser}, title});
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

	/**
	 *Method for view Articles of author
	 *
	 * @param {*} email
	 * @returns
	 * @memberof ArticleService
	 */
	viewReviewArticles(idUser) {
		return getConnection().getRepository(ArticleReview).find({ user: {idUser}});
	  }


}

import { getConnection } from 'typeorm';
import UserInterfaceService from './UserInterfaceService';
import TypeUser from '../entity/TypeUserEntity';
import User from '../entity/UserEntity';
import Hotbed from '../entity/HotbedEntity';
import { pbkdf2Sync } from 'crypto';
import EmailService from './EmailService';
import Category from '../entity/CategoryEntity';

export default class AdministratorService implements UserInterfaceService {
	/**
	 *
	 *
	 * @param {*} objectUser
	 * @returns {Object}
	 * @memberof AdministratorService
	 */
	getUsers(objectUser): Object {
		return getConnection().getRepository(objectUser).find({ relations: [ 'typeUser' ] });
	}

	/**
     *  Method Consult Type User
     *
     * @param {*} privilegesTypeUser
     * @returns
     * @memberof AuthorService
     */
	consultTypeUser(privilegesTypeUser: String) {
		return getConnection()
			.getRepository(TypeUser)
			.createQueryBuilder('typeUser')
			.where('typeUser.privilegesTypeUser = :privilegesTypeUser', { privilegesTypeUser })
			.getOne();
	}

	/**
	 *  Get Hotdebs
	 *
	 * @param {string} nameHotbed
	 * @returns
	 * @memberof AdministratorService
	 */
	consultHotService(nameHotbed: string) {
		return getConnection()
			.getRepository(Hotbed)
			.createQueryBuilder('hotbed')
			.where('hotbed.nameHotbed = :nameHotbed', { nameHotbed })
			.getOne();
	}

	/**
	 * Method for Get user
	 *
	 * @param {string} identificationUser
	 * @returns
	 * @memberof AdministratorService
	 */
	consultgetUser(identificationUser: string) {
		return getConnection()
			.getRepository(User)
			.createQueryBuilder('user')
			.where('user.identificationUser = :identificationUser', { identificationUser })
			.getOne();
	}

	/**
     *
     * Method Create user
     * @memberof AuthorService
     */
	createUser(
		nameUser: string,
		lastNameUser: string,
		birthDateUser,
		identificationUser,
		emailUser: string,
		passwordUser: string,
		hodbed?,
		typeUser?,
		levelEducationEvaluator?: string,
		linkCvlackEvaluator?: string
	): void {
		const mail = new EmailService(
			emailUser,
			'Welcome to Magasoft',
			`Welcome ${nameUser} ${lastNameUser} to Magasoft, your role is ${typeUser.privilegesTypeUser.toLocaleUpperCase()}`
		);
		if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'AUTHOR') {
			getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					nameUser,
					lastNameUser,
					birthDateUser,
					identificationUser,
					emailUser,
					passwordUser: this.createHash(passwordUser),
					hodbed,
					typeUser
				})
				.execute();
			mail.sendEmail();
		} else if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'EVALUATOR') {
			getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					nameUser,
					lastNameUser,
					birthDateUser,
					identificationUser,
					emailUser,
					passwordUser: this.createHash(passwordUser),
					levelEducationEvaluator,
					linkCvlackEvaluator,
					typeUser
				})
				.execute();
			mail.sendEmail();
		} else if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'COMMITTEE') {
			getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					nameUser,
					lastNameUser,
					birthDateUser,
					identificationUser,
					emailUser,
					passwordUser: this.createHash(passwordUser),
					typeUser
				})
				.execute();
			mail.sendEmail();
		} else if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'READER') {
			getConnection()
				.createQueryBuilder()
				.insert()
				.into(User)
				.values({
					nameUser,
					lastNameUser,
					birthDateUser,
					identificationUser,
					emailUser,
					passwordUser: this.createHash(passwordUser),
					typeUser
				})
				.execute();
			mail.sendEmail();
		}
	}

	/***
	 * Method for create category
	 */
	createCategory(nameCategory) {
		return getConnection().createQueryBuilder().insert().into(Category).values({ nameCategory }).execute();
	}

	/**
	 *
	 * Method for view view Categories
	 * @returns
	 * @memberof AdministratorService
	 */
	viewCategories() {
		return getConnection().query(`SELECT * FROM category`);
	}

	
	/**
	 *
	 * Method for create hash
	 * @memberof AdministratorService
	 */
	createHash(password: string): string {
		return pbkdf2Sync(password, 'salt', 100000, 35, 'sha512').toString('hex');
	}
}

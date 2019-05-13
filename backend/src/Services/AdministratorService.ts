import { getConnection } from 'typeorm';
import UserInterfaceService from './UserInterfaceService';
import TypeUser from '../entity/TypeUserEntity';
import User from '../entity/UserEntity';
import Hotbed from '../entity/HotbedEntity';
import {pbkdf2Sync} from 'crypto';

export default class AdministratorService implements UserInterfaceService {


	/**
	 *
	 *
	 * @param {*} objectUser
	 * @returns {Object}
	 * @memberof AdministratorService
	 */
	getUsers(objectUser): Object {
		return getConnection().getRepository(objectUser).createQueryBuilder().select('user').from(User, 'user').getMany();
	}

	/**
     * Consult Type User
     *
     * @param {*} privilegesTypeUser
     * @returns
     * @memberof AuthorService
     */
	consultTypeUser(privilegesTypeUser: String) {
		return getConnection().getRepository(TypeUser).createQueryBuilder('typeUser')
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
        .where('hotbed.nameHotbed = :nameHotbed', {nameHotbed})
        .getOne()
	}

	
	/**
	 * Get user
	 *
	 * @param {string} identificationUser
	 * @returns
	 * @memberof AdministratorService
	 */
	consultgetUser(identificationUser: string) {
		return getConnection()
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.identificationUser = :identificationUser', {identificationUser})
        .getOne()
	}

	/**
     *
     *Create user
     * @memberof AuthorService
     */
	createUser(nameUser: string, lastNameUser: string,  birthDateUser, identificationUser, emailUser: string,passwordUser: string, hodbed?, typeUser?, levelEducationEvaluator ? : string,  linkCvlackEvaluator ? : string): void {
		if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'AUTOR') {
			getConnection().createQueryBuilder().insert().into(User) .values({ nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser: this.createHash(passwordUser), hodbed, typeUser }).execute();
		} else if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'EVALUADOR') {
			getConnection().createQueryBuilder().insert().into(User)
			 .values({ nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser: this.createHash(passwordUser), levelEducationEvaluator,  linkCvlackEvaluator, typeUser }).execute();
		} else if(typeUser.privilegesTypeUser.toLocaleUpperCase() === 'MIEMBRO DEL COMITE') {
			getConnection().createQueryBuilder().insert().into(User) .values({ nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser: this.createHash(passwordUser), typeUser }).execute();
		} else if (typeUser.privilegesTypeUser.toLocaleUpperCase() === 'LECTOR') {
			getConnection().createQueryBuilder().insert().into(User) .values({ nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser: this.createHash(passwordUser), typeUser }).execute();			
		}
	}

	/**
	 *
	 *
	 * @memberof AdministratorService
	 */
	createHash (password: string) : string {
		return pbkdf2Sync(password, 'salt', 100000, 35, 'sha512').toString('hex');
	}

}

import { getConnection } from 'typeorm';
import User from '../entity/UserEntity';
import { pbkdf2Sync, createHash } from 'crypto';

export default class AuthorService {


    /**
     * Method for sign Up
     * @param email 
     * @param password 
     */
    signUp(email: string, password: string) {
        return getConnection().query(`SELECT * FROM user u, type_user ty WHERE u.emailUser=? and u.passwordUser=? and u.typeUserIdTypeUser=ty.idTypeUser`, [email, this.createHash(password)]);
    }                                  


    /**
     *  Method for Recovery Password
     *
     * @param {string} email
     * @param {string} newPassword
     * @memberof AuthorService
     */
    async recoverPassword(email: string, newPassword: string) {
        try {
            const data = await getConnection().createQueryBuilder().select("user").from(User, "user").where("user.emailUser = :email", {email}).getOne(); 
            if (Object.keys(data).length > 0) {
                await getConnection().createQueryBuilder().update(User).set({passwordUser: this.createHash(newPassword)}).where("emailUser = :email", {email: data.emailUser}).execute();
            }
        } catch (error) {
            console.log(error);
        }
    }
    
   /**
    *
    * Method for create Hash
    * @param {string} password
    * @returns {string}
    * @memberof AuthorService
    */
   createHash (password: string) : string {
		return pbkdf2Sync(password, 'salt', 100000, 35, 'sha512').toString('hex');
    }
    

}

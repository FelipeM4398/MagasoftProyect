import { getConnection } from 'typeorm';
import User from '../entity/UserEntity';




export default class UserService {
    constructor() {}

    uptadeUser(nameUser, identificationUser ) {
        return getConnection()
               .createQueryBuilder().update(User)
               .set({nameUser})
               .where("identificationUser = :identificationUser", {identificationUser})
               .execute();
    }

    infoUser(identificationUser) {
        return getConnection().query(`SELECT * FROM user u WHERE u.identificationUser=?`, [identificationUser]);
    }

}
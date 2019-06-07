import { getConnection } from 'typeorm';
import User from '../entity/UserEntity';




export default class UserService {
    constructor() {}

    uptadeUser(nameUser, lastNameUser, birthDateUser, identificationUser ) {
        return getConnection().query(`UPDATE user SET nameUser=?, lastNameUser=?, birthDateUser=? WHERE identificationUser=?`, [nameUser, lastNameUser, birthDateUser, identificationUser])
    }

    infoUser(identificationUser) {
        return getConnection().query(`SELECT * FROM user u WHERE u.identificationUser=?`, [identificationUser]);
    }

}
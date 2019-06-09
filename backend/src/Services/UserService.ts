import { getConnection } from 'typeorm';
import User from '../entity/UserEntity';




export default class UserService {
    constructor() {}

    uptadeUser(nameUser, lastNameUser, birthDateUser, identificationUser ) {
        return getConnection().query(`UPDATE user SET nameUser=?, lastNameUser=?, birthDateUser=? WHERE identificationUser=?`, [nameUser, lastNameUser, birthDateUser, identificationUser])
    }

    infoUser(identificationUser) {
        return getConnection().getRepository(User).createQueryBuilder("user").where("user.identificationUser = :identificationUser", {identificationUser}).getOne();
    }

}
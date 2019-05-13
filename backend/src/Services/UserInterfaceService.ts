
export default interface UserInterfaceService {

    createUser(nameUser, lastNameUser, birthDateUser, identificationUser, emailUser, passwordUser): void;
    
    consultTypeUser(privilegesTypeUser: String);
    
    getUsers(objectUser): Object;

    consultTypeUser(privilegesTypeUser: String): Object;

    createHash (password: string): String;

}
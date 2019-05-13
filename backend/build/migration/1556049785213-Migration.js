'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class Migration1556049785213 {
  async up (queryRunner) {
    await queryRunner.query('CREATE TABLE `user` (`idUser` int NOT NULL AUTO_INCREMENT, `nameUser` varchar(50) NOT NULL, `lastNameUser` varchar(50) NOT NULL, `birthDateUser` date NOT NULL, `identificationUser` varchar(12) NOT NULL, `emailUser` varchar(60) NOT NULL, `passwordUser` varchar(40) NOT NULL, `typeUserIdTypeUser` int NULL, PRIMARY KEY (`idUser`)) ENGINE=InnoDB')
    await queryRunner.query('CREATE TABLE `type_user` (`idTypeUser` int NOT NULL AUTO_INCREMENT, `privilegesTypeUser` varchar(30) NOT NULL, PRIMARY KEY (`idTypeUser`)) ENGINE=InnoDB')
    await queryRunner.query('ALTER TABLE `user` ADD CONSTRAINT `FK_d91f7532c0d5551e101e8d4cf57` FOREIGN KEY (`typeUserIdTypeUser`) REFERENCES `type_user`(`idTypeUser`) ON DELETE NO ACTION ON UPDATE NO ACTION')
  }
  async down (queryRunner) {
    await queryRunner.query('ALTER TABLE `user` DROP FOREIGN KEY `FK_d91f7532c0d5551e101e8d4cf57`')
    await queryRunner.query('DROP TABLE `type_user`')
    await queryRunner.query('DROP TABLE `user`')
  }
}
exports.Migration1556049785213 = Migration1556049785213
// # sourceMappingURL=1556049785213-Migration.js.map

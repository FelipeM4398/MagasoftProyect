import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1556559003831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `emailUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `emailUser` varchar(80) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `passwordUser` varchar(80) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `passwordUser` varchar(40) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `emailUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `emailUser` varchar(60) NOT NULL");
    }

}

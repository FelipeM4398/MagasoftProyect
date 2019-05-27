import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1558806808739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `article` ADD `urlFile` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `article` DROP COLUMN `urlFile`");
    }

}

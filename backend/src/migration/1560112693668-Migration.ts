import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1560112693668 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `article_category_category` (`articleIdArticle` int NOT NULL, `categoryIdCategory` int NOT NULL, INDEX `IDX_38121cf3f4f2344a9a3d8b166a` (`articleIdArticle`), INDEX `IDX_4b5d433abb24b00583b31ae9b9` (`categoryIdCategory`), PRIMARY KEY (`articleIdArticle`, `categoryIdCategory`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `identificationUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `identificationUser` varchar(14) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `emailUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `emailUser` varchar(90) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `passwordUser` varchar(90) NOT NULL");
        await queryRunner.query("ALTER TABLE `article_category_category` ADD CONSTRAINT `FK_38121cf3f4f2344a9a3d8b166a7` FOREIGN KEY (`articleIdArticle`) REFERENCES `article`(`idArticle`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article_category_category` ADD CONSTRAINT `FK_4b5d433abb24b00583b31ae9b97` FOREIGN KEY (`categoryIdCategory`) REFERENCES `category`(`idCategory`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `article_category_category` DROP FOREIGN KEY `FK_4b5d433abb24b00583b31ae9b97`");
        await queryRunner.query("ALTER TABLE `article_category_category` DROP FOREIGN KEY `FK_38121cf3f4f2344a9a3d8b166a7`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `passwordUser` varchar(40) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `emailUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `emailUser` varchar(60) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `identificationUser`");
        await queryRunner.query("ALTER TABLE `user` ADD `identificationUser` varchar(12) NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_4b5d433abb24b00583b31ae9b9` ON `article_category_category`");
        await queryRunner.query("DROP INDEX `IDX_38121cf3f4f2344a9a3d8b166a` ON `article_category_category`");
        await queryRunner.query("DROP TABLE `article_category_category`");
    }

}

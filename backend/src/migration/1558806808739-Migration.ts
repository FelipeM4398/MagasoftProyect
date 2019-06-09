import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1558806808739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `category` (`idCategory` int NOT NULL AUTO_INCREMENT, `nameCategory` varchar(50) NOT NULL, PRIMARY KEY (`idCategory`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `type_user` (`idTypeUser` int NOT NULL AUTO_INCREMENT, `privilegesTypeUser` varchar(30) NOT NULL, PRIMARY KEY (`idTypeUser`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `hotbed` (`idHotbed` int NOT NULL AUTO_INCREMENT, `nameHotbed` varchar(50) NOT NULL, `descriptionHotbed` text NOT NULL, PRIMARY KEY (`idHotbed`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`idUser` int NOT NULL AUTO_INCREMENT, `nameUser` varchar(50) NOT NULL, `lastNameUser` varchar(50) NOT NULL, `birthDateUser` date NOT NULL, `identificationUser` varchar(12) NOT NULL, `emailUser` varchar(60) NOT NULL, `passwordUser` varchar(40) NOT NULL, `levelEducationEvaluator` varchar(30) NULL, `linkCvlackEvaluator` varchar(200) NULL, `typeUserIdTypeUser` int NULL, `hodbedIdHotbed` int NULL, PRIMARY KEY (`idUser`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `article_review` (`idArticleReview` int NOT NULL AUTO_INCREMENT, `dateReceivedArticleReview` date NOT NULL, `stateArticleReview` varchar(40) NOT NULL, `observationArticleReview` text NOT NULL, `articleIdArticle` int NULL, `userIdUser` int NULL, PRIMARY KEY (`idArticleReview`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_review` (`idQuestionReview` int NOT NULL AUTO_INCREMENT, `ObservationQuestionReview` text NOT NULL, `qualificationQuestionReview` int NOT NULL, `questionIdQuestion` int NULL, `articleReviewIdArticleReview` int NULL, PRIMARY KEY (`idQuestionReview`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question` (`idQuestion` int NOT NULL AUTO_INCREMENT, `descriptionQuestion` text NOT NULL, PRIMARY KEY (`idQuestion`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_evaluation` (`idQuestionEvaluation` int NOT NULL AUTO_INCREMENT, `justificationQuestionEvaluation` text NOT NULL, `qualificationQuestionEvaluation` int NOT NULL, `evaluationArticleIdEvaluation` int NULL, `questionIdQuestion` int NULL, PRIMARY KEY (`idQuestionEvaluation`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `evaluation_article` (`idEvaluation` int NOT NULL AUTO_INCREMENT, `observationEvaluation` text NOT NULL, `quealificationEvaluation` int NOT NULL, `dateReceivedEvaluation` date NOT NULL, `dateSendEvaluation` date NOT NULL, `articleIdArticle` int NULL, `userIdUser` int NULL, PRIMARY KEY (`idEvaluation`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `article` (`idArticle` int NOT NULL AUTO_INCREMENT, `title` varchar(60) NOT NULL, `description` text NOT NULL, `publicationDate` date NOT NULL, `userIdUser` int NULL, PRIMARY KEY (`idArticle`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category_article_article` (`categoryIdCategory` int NOT NULL, `articleIdArticle` int NOT NULL, INDEX `IDX_53cf257222286e7cf4c33097e8` (`categoryIdCategory`), INDEX `IDX_b497ff3bf4a6b3714668bcc93c` (`articleIdArticle`), PRIMARY KEY (`categoryIdCategory`, `articleIdArticle`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `question_categories_category` (`questionIdQuestion` int NOT NULL, `categoryIdCategory` int NOT NULL, INDEX `IDX_f120a528b52f700d091c0bcf18` (`questionIdQuestion`), INDEX `IDX_73cca2d29aa912134ebcfac6db` (`categoryIdCategory`), PRIMARY KEY (`questionIdQuestion`, `categoryIdCategory`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_d91f7532c0d5551e101e8d4cf57` FOREIGN KEY (`typeUserIdTypeUser`) REFERENCES `type_user`(`idTypeUser`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_40f80aa8ce65e5ad67447e6a3f8` FOREIGN KEY (`hodbedIdHotbed`) REFERENCES `hotbed`(`idHotbed`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article_review` ADD CONSTRAINT `FK_4b3be455ce0b5e55f55f3b756d4` FOREIGN KEY (`articleIdArticle`) REFERENCES `article`(`idArticle`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article_review` ADD CONSTRAINT `FK_a46576917267a7004dbd1f19338` FOREIGN KEY (`userIdUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_review` ADD CONSTRAINT `FK_9d15ba2aaf010e5a0d1c0305cbc` FOREIGN KEY (`questionIdQuestion`) REFERENCES `question`(`idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_review` ADD CONSTRAINT `FK_ce4f7bf36fb5f7828df4c8eda25` FOREIGN KEY (`articleReviewIdArticleReview`) REFERENCES `article_review`(`idArticleReview`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_evaluation` ADD CONSTRAINT `FK_deff99d0fa958673d3623fd67c3` FOREIGN KEY (`evaluationArticleIdEvaluation`) REFERENCES `evaluation_article`(`idEvaluation`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_evaluation` ADD CONSTRAINT `FK_df53b77fd1546adb0ac3df67b68` FOREIGN KEY (`questionIdQuestion`) REFERENCES `question`(`idQuestion`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `evaluation_article` ADD CONSTRAINT `FK_52199f38d6c1e39ef443c4d72a8` FOREIGN KEY (`articleIdArticle`) REFERENCES `article`(`idArticle`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `evaluation_article` ADD CONSTRAINT `FK_ed147737490d96fc8f31ae6b49a` FOREIGN KEY (`userIdUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article` ADD CONSTRAINT `FK_f7ad577ba71f833262b0e9d782e` FOREIGN KEY (`userIdUser`) REFERENCES `user`(`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `category_article_article` ADD CONSTRAINT `FK_53cf257222286e7cf4c33097e89` FOREIGN KEY (`categoryIdCategory`) REFERENCES `category`(`idCategory`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `category_article_article` ADD CONSTRAINT `FK_b497ff3bf4a6b3714668bcc93c1` FOREIGN KEY (`articleIdArticle`) REFERENCES `article`(`idArticle`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_categories_category` ADD CONSTRAINT `FK_f120a528b52f700d091c0bcf184` FOREIGN KEY (`questionIdQuestion`) REFERENCES `question`(`idQuestion`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `question_categories_category` ADD CONSTRAINT `FK_73cca2d29aa912134ebcfac6dbf` FOREIGN KEY (`categoryIdCategory`) REFERENCES `category`(`idCategory`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article` ADD `urlFile` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `question_categories_category` DROP FOREIGN KEY `FK_73cca2d29aa912134ebcfac6dbf`");
        await queryRunner.query("ALTER TABLE `question_categories_category` DROP FOREIGN KEY `FK_f120a528b52f700d091c0bcf184`");
        await queryRunner.query("ALTER TABLE `category_article_article` DROP FOREIGN KEY `FK_b497ff3bf4a6b3714668bcc93c1`");
        await queryRunner.query("ALTER TABLE `category_article_article` DROP FOREIGN KEY `FK_53cf257222286e7cf4c33097e89`");
        await queryRunner.query("ALTER TABLE `article` DROP FOREIGN KEY `FK_f7ad577ba71f833262b0e9d782e`");
        await queryRunner.query("ALTER TABLE `evaluation_article` DROP FOREIGN KEY `FK_ed147737490d96fc8f31ae6b49a`");
        await queryRunner.query("ALTER TABLE `evaluation_article` DROP FOREIGN KEY `FK_52199f38d6c1e39ef443c4d72a8`");
        await queryRunner.query("ALTER TABLE `question_evaluation` DROP FOREIGN KEY `FK_df53b77fd1546adb0ac3df67b68`");
        await queryRunner.query("ALTER TABLE `question_evaluation` DROP FOREIGN KEY `FK_deff99d0fa958673d3623fd67c3`");
        await queryRunner.query("ALTER TABLE `question_review` DROP FOREIGN KEY `FK_ce4f7bf36fb5f7828df4c8eda25`");
        await queryRunner.query("ALTER TABLE `question_review` DROP FOREIGN KEY `FK_9d15ba2aaf010e5a0d1c0305cbc`");
        await queryRunner.query("ALTER TABLE `article_review` DROP FOREIGN KEY `FK_a46576917267a7004dbd1f19338`");
        await queryRunner.query("ALTER TABLE `article_review` DROP FOREIGN KEY `FK_4b3be455ce0b5e55f55f3b756d4`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_40f80aa8ce65e5ad67447e6a3f8`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_d91f7532c0d5551e101e8d4cf57`");
        await queryRunner.query("DROP INDEX `IDX_73cca2d29aa912134ebcfac6db` ON `question_categories_category`");
        await queryRunner.query("DROP INDEX `IDX_f120a528b52f700d091c0bcf18` ON `question_categories_category`");
        await queryRunner.query("DROP TABLE `question_categories_category`");
        await queryRunner.query("DROP INDEX `IDX_b497ff3bf4a6b3714668bcc93c` ON `category_article_article`");
        await queryRunner.query("DROP INDEX `IDX_53cf257222286e7cf4c33097e8` ON `category_article_article`");
        await queryRunner.query("DROP TABLE `category_article_article`");
        await queryRunner.query("DROP TABLE `article`");
        await queryRunner.query("DROP TABLE `evaluation_article`");
        await queryRunner.query("DROP TABLE `question_evaluation`");
        await queryRunner.query("DROP TABLE `question`");
        await queryRunner.query("DROP TABLE `question_review`");
        await queryRunner.query("DROP TABLE `article_review`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `hotbed`");
        await queryRunner.query("DROP TABLE `type_user`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("ALTER TABLE `article` DROP COLUMN `urlFile`");
    }

}

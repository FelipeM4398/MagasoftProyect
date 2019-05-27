import { PrimaryGeneratedColumn, Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import Article from './ArticleEntity';


@Entity()
export default class Category {

    @PrimaryGeneratedColumn()
    idCategory: number

    @Column('varchar', {length: 50})
    nameCategory

}
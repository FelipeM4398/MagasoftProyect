import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import User from './UserEntity';

@Entity()
export default class Hotbed {

    @PrimaryGeneratedColumn()
    idHotbed: String

    @Column("varchar", {length: 50})
    nameHotbed: String

    @Column('text')
    descriptionHotbed:Text

    @OneToMany(type => User, user => user.hodbed)
    user: User[]
}
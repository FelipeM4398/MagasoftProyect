import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import User from './UserEntity';

@Entity()
export default class TypeUser {

     @PrimaryGeneratedColumn()
     idTypeUser: number

     @Column("varchar", {length: 30})
     privilegesTypeUser: String

     @OneToMany(type => User, user => user.typeUser)
     user: User[]
}
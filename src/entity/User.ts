import { BaseEntity } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { connection } from "./../db/connection";
// import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
// import {
// 	HasManyGetAssociationsMixin,
// 	HasManyAddAssociationMixin,
// 	HasManyHasAssociationMixin,
// 	Association,
// 	HasManyCountAssociationsMixin,
// 	HasManyCreateAssociationMixin
// } from "sequelize";

// const sequelize = new Sequelize("postgres://user:w3bh4ck:5432/adclip");

// export class User extends Model {
// 	public id!: number;
// 	public email: string;
// 	public username: string;
// }

// User.init(
// 	{
// 		id: {
// 			type: DataTypes.INTEGER.UNSIGNED,
// 			autoIncrement: true,
// 			primaryKey: true
// 		},
// 		email: {
// 			type: new DataTypes.STRING(128),
// 			allowNull: false
// 		},
// 		userName: {
// 			type: new DataTypes.STRING(128),
// 			allowNull: false
// 		}
// 	},
// 	{
// 		sequelize,
// 		tableName: "users"
// 	}
// );

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	username: string;
}

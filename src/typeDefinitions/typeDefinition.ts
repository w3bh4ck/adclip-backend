import { gql } from "apollo-server";
import { Entity, Column, PrimaryColumn, createConnection } from "typeorm";
import { connection } from "../db/dbConnection";
// import { userProfile } from "../entity/userProfile";
import uuid from "uuid";

interface newUser {
	email: String;
	username: String;
	password: String;
	id: number;
}

@Entity()
class userProfile {
	@PrimaryColumn("uuid")
	id: string;

	@Column("text")
	username: string;

	@Column("text")
	email: string;

	@Column()
	password: string;
}

export const typeDefs = gql`
	type Users {
		username: String
		email: String
		password: String
	}

	type user {
		id: String
		username: String
		email: String
		password: String
	}

	type Query {
		users: [Users]
		user: user!
	}

	input newUser {
		email: String
		username: String
		password: String
		id: String
	}

	type Mutation {
		addUser(input: newUser): user
	}
`;

export const resolvers = {
	Query: {
		users: async () => {
			const users = await connection.select("*").from("users");
			return users;
		}
	},

	Mutation: {
		addUser(_: any, { input }: any) {
			createConnection()
				.then(async connection => {
					let newProfile = new userProfile();
					newProfile.email = input.email;
					newProfile.username = input.username;
					newProfile.password = input.password;
					await connection.manager.save(newProfile);
					console.log("Photo has been saved", newProfile);
				})
				.catch(error => console.log(error));

			return input;
			// add knex function here
		}
	}
};

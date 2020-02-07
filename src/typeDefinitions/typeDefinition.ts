import { gql } from "apollo-server";
import { Entity, Column, PrimaryColumn, createConnection } from "typeorm";
import { connection } from "../db/dbConnection";
import uuid from "uuid";

interface newUser {
	email: String;
	username: String;
	password: String;
	id: number;
}

@Entity()
class userProfile {
	@PrimaryColumn()
	id: number;

	@Column("text")
	username: string;

	@Column("text")
	email: string;

	@Column()
	password: string;
}

// createConnection({
// 	type: "postgres",
// 	host: "localhost",
// 	port: 5432,
// 	username: "w3bh4ck",
// 	password: "secret",
// 	database: "adclip",
// 	entities: [userProfile],
// 	synchronize: true,
// 	logging: false
// })
// 	.then(connection => {
// 		// here you can start to work with your entities
// 	})
// 	.catch(error => console.log(error));

export const typeDefs = gql`
	type Users {
		username: String
		email: String
		password: String
	}

	type user {
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

			// connection("profiles")
			// 	.returning("*")
			// 	.insert({
			// 		email: input.email,
			// 		username: input.username,
			// 		password: input.password,
			// 		id: uuid()
			// 	})
			// 	.then(() => console.log);
			return input;
			// add knex function here
		}
	}
};

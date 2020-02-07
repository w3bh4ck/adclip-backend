import { gql } from "apollo-server";
import { connection } from "../db/dbConnection";
import uuid from "uuid";

interface newUser {
	email: String;
	username: String;
	password: String;
}

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
			// console.log("CHECK email", input.email);
			connection("profiles")
				.returning("*")
				.insert({
					email: input.email,
					username: input.username,
					password: input.password,
					id: uuid()
				})
				.then(() => console.log);
			return input;
			// add knex function here
		}
	}
};

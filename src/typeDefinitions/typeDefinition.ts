import { gql } from "apollo-server";
import { connection } from "../db/dbConnection";

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

	type Query {
		users: [Users]
	}

	input newUser {
		email: String
		username: String
		password: String
	}

	type Mutation {
		addUser(input: newUser): [Users]!
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
			connection("users")
				.insert({
					email: input.email,
					username: input.username,
					password: input.password
				})
				.then(() => console.log);
			return [input];

			// add knex function here
		}
	}
};

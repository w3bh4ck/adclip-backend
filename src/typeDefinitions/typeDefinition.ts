import { gql } from "apollo-server";
import { connection } from "../db/dbConnection";

interface newUser {
	email: string;
	username: string;
	password: string;
}

export const typeDefs = gql`
	type Users {
		username: String
		email: String
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
		addUser(input: newUser): [Users]
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
		addUser(_: any, { email, username, password }: newUser, __: any) {
			const user = connection("users").insert([
				{ email: email },
				{ username: username },
				{ password: password }
			]);
			return user;
		}
	}
};

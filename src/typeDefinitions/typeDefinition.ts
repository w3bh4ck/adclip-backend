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
`;

export const resolvers = {
	Query: {
		users: async () => {
			const users = await connection.select("*").from("users");
			return users;
		}
	},

	Mutation: {
		addUser: async (_: any, { email, username, password }, __: any) => {
			const user = await connection
				.insert([{ email: email }, { username: username }, { password: password }], ["id"])
				.into("users");
			return user;
		}
	}
};

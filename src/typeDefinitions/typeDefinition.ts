import { gql } from "apollo-server";
import { connection } from "../db/dbConnection";

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
	}
};

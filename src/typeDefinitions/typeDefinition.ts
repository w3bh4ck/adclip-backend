import uuid from "uuid";
import { connection } from "../db/dbConnection";
import { gql } from "apollo-server";
// import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

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
		users: () => {
			name: "lucky";
		}
	}
};

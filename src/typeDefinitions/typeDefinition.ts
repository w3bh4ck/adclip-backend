// import { userProfile } from "../entity/userProfile";
// import uuid from "uuid";
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
		users: async () => {
			const users = await connection.select("*").from("users");
			return users;
		}
	}

	// eMutation: {
	// 	addUser(_: any, { input }: any) {
	// 		// createConnection()
	// 		// 	.then(async connection => {
	// 		// 		let newProfile = new userProfile();
	// 		// 		newProfile.email = input.email;
	// 		// 		newProfile.username = input.username;
	// 		// 		newProfile.password = input.password;
	// 		// 		await connection.manager.save(newProfile);
	// 		// 		console.log("Photo has been saved", newProfile);
	// 		// 	})
	// 		// 	.catch(error => console.log(error));

	// 		return input;
	// 		// add knex function here
	// 	}
	// }
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("../db/dbConnection");
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
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
exports.resolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield dbConnection_1.connection.select("*").from("users");
            return users;
        })
    }
    // Mutation: {
    // 	addUser(_: any, { input }: any) {
    // 		createConnection()
    // 			.then(async connection => {
    // 				let newProfile = new userProfile();
    // 				newProfile.email = input.email;
    // 				newProfile.username = input.username;
    // 				newProfile.password = input.password;
    // 				await connection.manager.save(newProfile);
    // 				console.log("Photo has been saved", newProfile);
    // 			})
    // 			.catch(error => console.log(error));
    // 		return input;
    // 		// add knex function here
    // 	}
    // }
};
//# sourceMappingURL=typeDefinition.js.map
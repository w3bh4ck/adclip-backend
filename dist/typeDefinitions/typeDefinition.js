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
const apollo_server_1 = require("apollo-server");
const dbConnection_1 = require("../db/dbConnection");
exports.typeDefs = apollo_server_1.gql `
	type Users {
		username: String
		email: String
	}

	type Query {
		users: [Users]
	}
`;
exports.resolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield dbConnection_1.connection.select("*").from("users");
            return users;
        })
    }
};
//# sourceMappingURL=typeDefinition.js.map
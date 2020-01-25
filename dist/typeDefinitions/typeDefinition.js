"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const users = [
    {
        name: "okey",
        email: "okey.com"
    },
    {
        name: "kalu",
        email: "kalu.com"
    }
];
exports.typeDefs = apollo_server_1.gql `
	type Users {
		name: String
		email: String
	}

	type Query {
		users: [Users]
	}
`;
exports.resolvers = {
    Query: {
        users: () => users
    }
};
//# sourceMappingURL=typeDefinition.js.map
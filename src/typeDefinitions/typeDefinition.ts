import { gql } from "apollo-server";

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

export const typeDefs = gql`
	type Users {
		name: String
		email: String
	}

	type Query {
		users: [Users]
	}
`;

export const resolvers = {
	Query: {
		users: () => users
	}
};

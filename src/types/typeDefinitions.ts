import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID
		email: String
		username: String
	}

	input userInput {
		id: Int
	}

	type Query {
		user(input: userInput): [User]
	}
`;

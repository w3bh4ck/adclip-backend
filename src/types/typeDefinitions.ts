import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID
		email: String
		username: String
	}

	input userId {
		id: Int
	}

	type Query {
		user(input: userId): User
	}
`;

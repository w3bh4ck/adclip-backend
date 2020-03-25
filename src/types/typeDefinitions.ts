import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID
		email: String
		username: String
		password: String
	}

	input UserId {
		id: Int
	}

	input NewUserInput {
		username: String!
		email: String!
		password: String!
	}

	type Query {
		user(input: UserId): User
	}

	type Mutation {
		newUser(input: NewUserInput): User
	}
`;

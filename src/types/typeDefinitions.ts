import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID
		email: String
		username: String
	}

	input UserId {
		id: Int
	}

	input NewUserInput {
		_id: String!
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

import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		username: String!
	}

	type Query {
		user: User
	}
`;

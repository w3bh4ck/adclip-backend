import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		avatar: String
		phone: Int
	}

	type Query {
		me: User!
	}
`;

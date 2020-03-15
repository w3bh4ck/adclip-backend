import gql from "graphql-tag";
export const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		avatar: String
		phone: String
	}

	type Query {
		me: User!
	}
`;

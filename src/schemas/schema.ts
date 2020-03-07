const { gql } = require("apollo-server");

const typeDefs = gql`
	type user {
		id: ID!
		userName: String
		email: String
		phone: String
	}

	type users {
		allUsers: [user]
	}
`;

module.exports = typeDefs;

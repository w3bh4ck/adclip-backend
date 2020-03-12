import gql from "graphql-tag";
import { ApolloServer } from "apollo-server";

const typeDefs = gql`
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

const resolvers = {
	Query: {
		me() {
			return {
				email: "lucky@sofcom.ng",
				phone: "07037401405"
			};
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(() => console.log("app is running on port 4000"));

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

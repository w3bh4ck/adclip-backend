import { ApolloServer, gql } from "apollo-server";
import knex from "knex";
import { typeDefs, resolvers } from "./typeDefinitions/typeDefinition";

const connection = knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		user: "w3bh4ck",
		password: "secret",
		database: "adclip"
	}
});

const checkConnection = connection("users")
	.where({
		username: "lawkey"
	})
	.select("email");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
	console.log("from db", checkConnection);
});

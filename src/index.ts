import { ApolloServer, gql } from "apollo-server";
import { typeDefs, resolvers } from "./typeDefinitions/typeDefinition";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

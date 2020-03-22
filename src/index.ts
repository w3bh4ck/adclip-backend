import { ApolloServer } from "apollo-server";
import { typeDefs } from "./types/typeDefinitions";
import { resolvers } from "./resolvers/resolver";
import { createConnection } from "typeorm";

const server = new ApolloServer({ typeDefs, resolvers });

createConnection()
	.then(async () => {
		console.log("connection successful");
		server.listen(4000).then(() => console.log("app is running on port 4000"));
	})
	.catch(error => console.log(error));

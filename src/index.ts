import { ApolloServer } from "apollo-server";
import { typeDefs } from "./types/typeDefinitions";
import { resolvers } from "./resolvers/resolver";
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

const sequelize = new Sequelize("adclip", "w3bh4ck", "secret", {
	host: "localhost",
	dialect: "postgres"
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err: object) => {
		console.error("Unable to connect to the database:", err);
	});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(() => console.log("app is running on port 4000"));

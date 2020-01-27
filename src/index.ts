import express, { Request, Response } from "express";
import { ApolloServer, gql } from "apollo-server";
import { typeDefs, resolvers } from "./typeDefinitions/typeDefinition";
import graphqlHTTP from "express-graphql";
import bodyParser from "body-parser";
import { dashboardRoute } from "./routes/dashboard/dashboardRoute";

const server = new ApolloServer({ typeDefs, resolvers });
const port = 8080;

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});

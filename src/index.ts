import express, { Request, Response } from "express";
import { ApolloServer, gql } from "apollo-server";
import graphqlHTTP from "express-graphql";
import bodyParser from "body-parser";
import { dashboardRoute } from "./routes/dashboard/dashboardRoute";
const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
	"/graphql",
	graphqlHTTP({
		schema: null,
		graphiql: true
	})
);

app.use(dashboardRoute);

app.listen(port, () => console.log(`running on port ${port}`));

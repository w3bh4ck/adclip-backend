"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefinition_1 = require("./typeDefinitions/typeDefinition");
const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefinition_1.typeDefs, resolvers: typeDefinition_1.resolvers });
const port = 8080;
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
// const port = 8080;
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(
// 	"/graphql",
// 	graphqlHTTP({
// 		schema: null,
// 		graphiql: true
// 	})
// );
// app.use(dashboardRoute);
// app.listen(port, () => console.log(`running on port ${port}`));
//# sourceMappingURL=index.js.map
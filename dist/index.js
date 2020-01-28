"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefinition_1 = require("./typeDefinitions/typeDefinition");
const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefinition_1.typeDefs, resolvers: typeDefinition_1.resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map
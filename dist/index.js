"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefinition_1 = require("./typeDefinitions/typeDefinition");
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefinition_1.typeDefs, resolvers: typeDefinition_1.resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
//# sourceMappingURL=index.js.map
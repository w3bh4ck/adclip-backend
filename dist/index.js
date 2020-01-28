"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const knex_1 = __importDefault(require("knex"));
const typeDefinition_1 = require("./typeDefinitions/typeDefinition");
const connection = knex_1.default({
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
const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefinition_1.typeDefs, resolvers: typeDefinition_1.resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    console.log("from db", checkConnection);
});
//# sourceMappingURL=index.js.map
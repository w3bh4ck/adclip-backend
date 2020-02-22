"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
// import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Users {\n\t\tusername: String\n\t\temail: String\n\t\tpassword: String\n\t}\n\n\ttype user {\n\t\tid: String\n\t\tusername: String\n\t\temail: String\n\t\tpassword: String\n\t}\n\n\ttype Query {\n\t\tusers: [Users]\n\t\tuser: user!\n\t}\n\n\tinput newUser {\n\t\temail: String\n\t\tusername: String\n\t\tpassword: String\n\t\tid: String\n\t}\n\n\ttype Mutation {\n\t\taddUser(input: newUser): user\n\t}\n"], ["\n\ttype Users {\n\t\tusername: String\n\t\temail: String\n\t\tpassword: String\n\t}\n\n\ttype user {\n\t\tid: String\n\t\tusername: String\n\t\temail: String\n\t\tpassword: String\n\t}\n\n\ttype Query {\n\t\tusers: [Users]\n\t\tuser: user!\n\t}\n\n\tinput newUser {\n\t\temail: String\n\t\tusername: String\n\t\tpassword: String\n\t\tid: String\n\t}\n\n\ttype Mutation {\n\t\taddUser(input: newUser): user\n\t}\n"])));
exports.resolvers = {
    Query: {
        users: function () {
            name: "lucky";
        }
    }
};
var templateObject_1;
//# sourceMappingURL=typeDefinition.js.map
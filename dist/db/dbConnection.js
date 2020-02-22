"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
exports.connection = knex_1.default({
    client: "postgres",
    connection: {
        host: "127.0.0.1",
        user: "w3bh4ck",
        password: "secret",
        database: "adclip"
    }
});
//# sourceMappingURL=dbConnection.js.map
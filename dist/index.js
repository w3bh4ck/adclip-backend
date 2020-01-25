"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const body_parser_1 = __importDefault(require("body-parser"));
const dashboardRoute_1 = require("./routes/dashboard/dashboardRoute");
const port = 8080;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/graphql", express_graphql_1.default({
    schema: null,
    graphiql: true
}));
app.use(dashboardRoute_1.dashboardRoute);
app.listen(port, () => console.log(`running on port ${port}`));
//# sourceMappingURL=index.js.map
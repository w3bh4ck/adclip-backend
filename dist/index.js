"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboardRoute_1 = require("./routes/dashboard/dashboardRoute");
const app = express_1.default();
const port = 8080;
app.use(dashboardRoute_1.dashboardRoute);
app.listen(port, () => console.log(`server running on port ${port}`));
//# sourceMappingURL=index.js.map
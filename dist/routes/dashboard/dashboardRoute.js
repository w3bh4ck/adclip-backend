"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardRoute = express_1.Router();
exports.dashboardRoute = dashboardRoute;
dashboardRoute.get("/", (req, res) => {
    res.send("this is the dashboard router");
});
//# sourceMappingURL=dashboardRoute.js.map
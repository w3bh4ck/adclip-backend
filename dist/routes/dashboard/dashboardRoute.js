"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboardRoute = express_1.default();
exports.dashboardRoute = dashboardRoute;
dashboardRoute.get("/", (req, res) => {
    res.send("this is the dashboard router");
});
//# sourceMappingURL=dashboardRoute.js.map
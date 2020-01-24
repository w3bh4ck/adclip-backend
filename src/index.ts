import express, { Request, Response } from "express";
import { dashboardRoute } from "./routes/dashboard/dashboardRoute";
const app = express();
const port = 8080;

app.use(dashboardRoute);

app.listen(port, () => console.log(`server running on port ${port}`));

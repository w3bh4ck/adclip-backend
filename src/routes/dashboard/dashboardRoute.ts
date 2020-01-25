import { Request, Response, Router } from "express";

const dashboardRoute = Router();

dashboardRoute.get("/", (req: Request, res: Response) => {
	res.send("this is the dashboard router");
});

export { dashboardRoute };

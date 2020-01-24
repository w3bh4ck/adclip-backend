import Router from "express";

const dashboardRoute = Router();

dashboardRoute.get("/", (req, res) => {
	res.send("this is the dashboard router");
});

export { dashboardRoute };

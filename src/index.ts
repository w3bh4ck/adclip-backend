import express, { Request, Response } from "express";
const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
	res.send("this runs on typescript");
});

app.listen(port, () => console.log(`server running on port ${port}`));

import { Request } from "express";

interface requestWithBody extends Request {
	body: {
		[key: string]: string | undefined;
	};
}

export { requestWithBody };

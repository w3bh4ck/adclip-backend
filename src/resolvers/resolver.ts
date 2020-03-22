import { Entity } from "typeorm";
import { User } from "../entity/User";
import { userInfo } from "os";

export const resolvers = {
	Query: {
		async user() {
			let data = {
				email: "law@gmail.com",
				username: "w3bh4ck"
			};
			return data;
		}
	}
};

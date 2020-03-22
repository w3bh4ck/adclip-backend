import { Entity } from "typeorm";
import { User } from "../entity/User";
import { userInfo } from "os";
import { connection } from "../db/connection";

interface UserType {
	id: number;
	username: string;
	email: string;
}

export const resolvers = {
	Query: {
		user() {
			let user = connection<UserType>()
				.select("id")
				.from("users")
				.where({ id: 1 });
			console.log("id", user);
			return user;
		}
	}
};

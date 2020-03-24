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
		async user(_: any, { input }) {
			let id = input.id;
			let user = await connection
				.select("*")
				.from("users")
				.where({ id })
				.then(data => {
					return data[0];
				})
				.catch(err => console.log("there was an error"));
			console.log("user", user);
			return user;
		}
	}
};

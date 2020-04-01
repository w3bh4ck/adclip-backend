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

			return user;
		}
	},

	Mutation: {
		async newUser(_: any, { input }) {
			let newUser = await connection("users")
				.returning(["id", "username", "email"])
				.insert({ id: "545", username: input.username, email: input.email, password: input.password });

			return newUser;
		}
	}
};

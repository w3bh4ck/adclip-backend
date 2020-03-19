import { Users } from "./../entity/User";
import { getConnection } from "typeorm";

export const resolvers = {
	Query: {
		async users() {
			const users = await getConnection()
				.createQueryBuilder()
				.select("Users")
				.from(Users, "Users")
				.getOne();
			console.log("db", users);
			return users;
		}
	}
};

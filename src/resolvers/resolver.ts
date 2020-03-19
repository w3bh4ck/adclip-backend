import { User } from "./../entity/User";
import { getManager } from "typeorm";

export const resolvers = {
	Query: {
		async users() {
			const user = await getManager()
				.createQueryBuilder(User, "profiles")
				.getMany();
			console.log("user", user);
			return user;
		}
	}
};

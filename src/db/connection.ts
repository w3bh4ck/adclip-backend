// import { Sequelize } from "sequelize";
import knex from "knex";

export const connection = knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		user: "w3bh4ck",
		password: "secret",
		database: "adclip"
	}
});

// export const connection = new Sequelize("adclip", "w3bh4ck", "secret", {
// 	host: "localhost",
// 	dialect: "postgres"
// });

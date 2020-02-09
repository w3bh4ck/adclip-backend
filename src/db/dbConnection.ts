import knex from "knex";

export const connection = knex({
	client: "postgres",
	connection: {
		host: "127.0.0.1",
		user: "w3bh4ck",
		password: "secret",
		database: "adclip"
	}
});

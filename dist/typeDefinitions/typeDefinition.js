"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeorm_1 = require("typeorm");
const dbConnection_1 = require("../db/dbConnection");
let userProfile = class userProfile {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], userProfile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], userProfile.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], userProfile.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], userProfile.prototype, "password", void 0);
userProfile = __decorate([
    typeorm_1.Entity()
], userProfile);
// createConnection({
// 	type: "postgres",
// 	host: "localhost",
// 	port: 5432,
// 	username: "w3bh4ck",
// 	password: "secret",
// 	database: "adclip",
// 	entities: [userProfile],
// 	synchronize: true,
// 	logging: false
// })
// 	.then(connection => {
// 		// here you can start to work with your entities
// 	})
// 	.catch(error => console.log(error));
exports.typeDefs = apollo_server_1.gql `
	type Users {
		username: String
		email: String
		password: String
	}

	type user {
		username: String
		email: String
		password: String
	}

	type Query {
		users: [Users]
		user: user!
	}

	input newUser {
		email: String
		username: String
		password: String
		id: String
	}

	type Mutation {
		addUser(input: newUser): user
	}
`;
exports.resolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield dbConnection_1.connection.select("*").from("users");
            return users;
        })
    },
    Mutation: {
        addUser(_, { input }) {
            typeorm_1.createConnection()
                .then((connection) => __awaiter(this, void 0, void 0, function* () {
                let newProfile = new userProfile();
                newProfile.email = input.email;
                newProfile.username = input.username;
                newProfile.password = input.password;
                yield connection.manager.save(newProfile);
                console.log("Photo has been saved", newProfile);
            }))
                .catch(error => console.log(error));
            // connection("profiles")
            // 	.returning("*")
            // 	.insert({
            // 		email: input.email,
            // 		username: input.username,
            // 		password: input.password,
            // 		id: uuid()
            // 	})
            // 	.then(() => console.log);
            return input;
            // add knex function here
        }
    }
};
//# sourceMappingURL=typeDefinition.js.map
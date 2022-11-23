"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const Updoot_1 = require("./entities/Updoot");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "lireddit2",
    username: "postgres",
    password: `${process.env.SQL_PASSWORD}`,
    logging: true,
    synchronize: true,
    entities: [Post_1.Post, User_1.User, Updoot_1.Updoot],
    migrations: [path_1.default.join(__dirname, "./migrations/*")],
});
//# sourceMappingURL=ormconfig.js.map
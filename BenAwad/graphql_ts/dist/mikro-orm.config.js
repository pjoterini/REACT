"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+z.[tj]s$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: "lireddit",
    type: "postgresql",
    debug: !constants_1.__prod__,
    password: `${process.env.SQL_PASSWORD}`,
    allowGlobalContext: true,
};
//# sourceMappingURL=mikro-orm.config.js.map
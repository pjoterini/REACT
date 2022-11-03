import dotenv from "dotenv";
dotenv.config();
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+z.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  password: `${process.env.SQL_PASSWORD}`,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];

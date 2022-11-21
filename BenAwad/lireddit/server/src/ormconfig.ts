import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import path from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "lireddit2",
  username: "postgres",
  password: `${process.env.SQL_PASSWORD}`,
  logging: true,
  synchronize: true,
  entities: [Post, User],
  migrations: [path.join(__dirname, "./migrations/*")],
});

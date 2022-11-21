import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { AppDataSource } from "./ormconfig";

const main = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("typeorm initialize works");
    })
    .catch((error) => console.error(error, "typeorm initialize does not work"));
  await AppDataSource.runMigrations();

  const app = express();

  app.set("trust proxy", 1);

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  if (!redis.status) {
    await redis.connect();
  }

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:4000/graphql",
        "http://localhost:4000",
      ],
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "dasdweqafsadf",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000");
  });
};

main();

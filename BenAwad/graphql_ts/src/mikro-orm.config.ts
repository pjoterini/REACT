import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
  dbName: "lireddit",
  debug: !__prod__,
  type: "postgresql",
  entities: [Post],
} as const;

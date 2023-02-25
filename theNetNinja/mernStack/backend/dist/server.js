import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import workoutsRouter from "./routes/workouts.js";
import userRouter from "./routes/users.js";
const app = express();
// MIDDLEWARE
app.use(cors({
    origin: "http://127.0.0.1:5173",
}));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.params);
    next();
});
// ROUTES
app.use("/api/workouts", workoutsRouter);
app.use("/api/user", userRouter);
// CONNECT TO DB
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("connected to db");
    // LISTEN TO REQUESTS
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}, at http://localhost:4000/`);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=server.js.map
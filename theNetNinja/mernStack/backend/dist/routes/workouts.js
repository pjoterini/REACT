import express from "express";
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkoutById, updateWorkout, } from "../controllers/workoutController.js";
import { requireAuth } from "../middleware/requireAuth.js";
const workoutsRouter = express.Router();
// MIDDLEWARE
workoutsRouter.use(requireAuth);
// ROUTES
workoutsRouter.get("/", getAllWorkouts);
workoutsRouter.get("/:id", getWorkoutById);
workoutsRouter.post("/", createWorkout);
workoutsRouter.patch("/:id", updateWorkout);
workoutsRouter.delete("/:id", deleteWorkout);
export default workoutsRouter;
//# sourceMappingURL=workouts.js.map
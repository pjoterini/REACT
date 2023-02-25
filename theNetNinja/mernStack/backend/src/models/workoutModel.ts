import mongoose, { Schema } from "mongoose";

interface Workout {
  title: string;
  reps: number;
  load: number;
}

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Workout = mongoose.model("Workout", workoutSchema);

import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[] | never>([]);

  const { dispatch } = useWorkoutsContext();
  const { authState } = useAuthContext();
  let user = authState.user;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError("you must be logged in");
      return;
    }

    const workout = { title: title, load: load, reps: reps };

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    });

    const createdWorkout = await response.json();

    if (!response.ok) {
      setError(createdWorkout.error);
      setEmptyFields(createdWorkout.emptyFields);
    }

    if (response.ok) {
      setError(null);
      setEmptyFields([]);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("new workout added", createdWorkout);
      dispatch({ type: "CREATE_WORKOUT", payload: createdWorkout });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="">Title:</label>
      <input
        required
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={
          emptyFields.includes("title")
            ? "bg-blue-900 rounded-full outline-none border-solid border-2 border-red-400 py-1 px-4"
            : "bg-blue-900 rounded-full outline-none border-solid border-2 border-cyan-200 py-1 px-4 focus:border-sky-500"
        }
      />
      <label htmlFor="">Load:</label>
      <input
        required
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={
          emptyFields.includes("title")
            ? "bg-blue-900 rounded-full outline-none border-solid border-2 border-red-400 py-1 px-4"
            : "bg-blue-900 rounded-full outline-none border-solid border-2 border-cyan-200 py-1 px-4 focus:border-sky-500"
        }
      />
      <label htmlFor="">Reps:</label>
      <input
        required
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={
          emptyFields.includes("title")
            ? "bg-blue-900 rounded-full outline-none border-solid border-2 border-red-400 py-1 px-4"
            : "bg-blue-900 rounded-full outline-none border-solid border-2 border-cyan-200 py-1 px-4 focus:border-sky-500"
        }
      />
      <button
        className=" mt-5 px-2 py-1 rounded-full border-2 border-yellow-500"
        type="submit"
      >
        Add Workout
      </button>
      {error && <div className="flex justify-center mt-4">{error}</div>}
    </form>
  );
};

export default WorkoutForm;

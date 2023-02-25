import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { workoutProps } from "../pages/Home";

interface WorkoutDetailsProps {
  key: number;
  workout: workoutProps;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const { dispatch } = useWorkoutsContext();
  const { authState } = useAuthContext();
  let user = authState.user;

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    const deletedWorkout = await response.json();
    console.log(deletedWorkout);

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: deletedWorkout });
    }
  };

  return (
    <div className="group flex flex-col mb-4 p-4 rounded-lg odd:bg-gradient-to-r from-cyan-500 to-blue-500  even:bg-gradient-to-l">
      <h4>{workout.title}</h4>
      <p>Load: {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <button
        className="group-first:text-red-300 group-n group-last:text-red-500 group
        border-2 rounded-md mt-2 px-2 text-red-400 text-lg ease-in-out duration-200 hover:scale-110"
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
};

export default WorkoutDetails;

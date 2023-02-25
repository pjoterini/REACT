import React, { createContext, useReducer } from "react";
import { workoutProps } from "../pages/Home";

interface ContextProvider {
  children: React.ReactNode;
}

type StateProps = {
  workouts: workoutProps[] | null;
};

interface ContextValue {
  state: StateProps;
  dispatch: any;
}

export const WorkoutsContext = createContext<ContextValue | null>(null);

export const workoutsReducer = (state: StateProps, action: any) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [...[state.workouts], action.payload],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state?.workouts?.filter((workout) => {
          return workout._id !== action.payload._id;
        }),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }: ContextProvider) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

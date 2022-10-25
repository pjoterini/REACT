import React, { useReducer } from "react";

const initialState = {
  counter: 1000,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
  }
}

export const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 12 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 8 })}>
        Decrement
      </button>
    </div>
  );
};

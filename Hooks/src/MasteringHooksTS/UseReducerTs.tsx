import React, { useReducer } from "react";

interface UseReducerTsProps {}

const initialState = {
  counter: 100,
};

enum ACTIONS {
  INCR = "increment",
  DECR = "decrement",
}

type ACTIONTYPE = { type: string; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case ACTIONS.INCR:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case ACTIONS.DECR:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("bad action");
  }
}

const UseReducerTs: React.FC<UseReducerTsProps> = ({}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="hook">
      <div>{state.counter}</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: ACTIONS.INCR, payload: 5 });
        }}
      >
        increment
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: ACTIONS.DECR, payload: 5 });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default UseReducerTs;

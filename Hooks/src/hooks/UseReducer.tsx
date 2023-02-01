import React, { useReducer } from "react";

interface UseReducerProps {}

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

type actions = {
  type: string;
  payload?: number;
};

function reducer(state: { count: number }, action: actions) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const UseReducer: React.FC<UseReducerProps> = ({}) => {
  const [state, dispatch] = useReducer(reducer, { count: 2 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className="hook">
      <h2>useReducer</h2>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
        -
      </button>
      <div>{state.count}</div>
    </div>
  );
};

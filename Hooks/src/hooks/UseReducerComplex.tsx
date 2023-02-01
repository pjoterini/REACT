import React, { BaseSyntheticEvent, useReducer, useState } from "react";
import { UseReducerTodo } from "./UseReducerTodo";

interface UseReducerComplexProps {}

// type todosState = {{ id: number; name: string; complete: boolean }[]}

type todosAction = {
  type: string;
  payload: {
    name: string;
  };
};

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

function newTodo(name: string) {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(
  state: { id: number; name: string; complete: boolean }[],
  action: todosAction
) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return [...state, newTodo(action.payload.name)];
    default:
      return [];
  }
}

export const UseReducerComplex: React.FC<UseReducerComplexProps> = ({}) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div className="hook">
      <h2>useReducer2</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            console.log(state);
            setName(e.target.value);
          }}
        />
      </form>
      <div>{name}</div>
      {state.map((instance) => {
        return <UseReducerTodo key={instance.id} todo={instance} />;
      })}
    </div>
  );
};

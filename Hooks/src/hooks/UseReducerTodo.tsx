import React from "react";

interface UseReducerTodoProps {
  todo: {
    id: number;
    name: string;
    complete: boolean;
  };
}

export const UseReducerTodo: React.FC<UseReducerTodoProps> = ({ todo }) => {
  return (
    <>
      <h4
        style={{
          color: todo.complete ? "green" : "red",
        }}
      >
        {todo.name}
      </h4>
      <button>toggle</button>
      <button>delete</button>
    </>
  );
};

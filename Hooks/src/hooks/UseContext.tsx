import React, { useContext } from "react";
import { ColorContext, ObjectContext } from "../App";

interface UseContextProps {}

export const UseContext: React.FC<UseContextProps> = ({}) => {
  const color = useContext(ColorContext);
  let object = useContext(ObjectContext);
  let { name, age } = object;

  return (
    <div className="hook">
      <h3
        style={{
          color: color,
          border: "1px solid white",
        }}
      >
        useContext
      </h3>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

import React, { useState } from "react";

interface UseStateTsProps {}

export const UseStateTs: React.FC<UseStateTsProps> = ({}) => {
  const [arr, setArr] = useState<number[] | []>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div className="hook">
      <h2>useState</h2>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          add to arr
        </button>
        {JSON.stringify(arr)}
        {arr.map((instance) => {
          return <div key={instance}>{instance}</div>;
        })}
        <button onClick={() => setName("piotiii")}>set name</button>
        {name}
      </div>
    </div>
  );
};

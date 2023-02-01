import React, { useEffect, useState } from "react";

interface Man {
  name: string;
  age: number;
  hobbies: string[];
}

function useFetchData<Generic>(url: string): {
  data: Generic | null;
  done: boolean;
} {
  const [data, setData] = useState<Generic | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

export const CustomHookTs = () => {
  const { data, done } = useFetchData<Man>("/man.json");

  return (
    <div className="hook">
      <h2>CUSTOM HOOK</h2>
      <div>{done && data?.age}</div>
      <div>{done && data?.name}</div>
      <div>
        Hobbies: {done && data?.hobbies[0]}, {done && data?.hobbies[1]}
      </div>
    </div>
  );
};

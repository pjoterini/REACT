import React, { useState } from "react";
import { useFetchCustom } from "./useFetchCustom";

export const UseEffect2: React.FC = () => {
  const [url, setUrl] = useState("");

  const { data } = useFetchCustom({
    url: url,
  });
  console.log("app rendering");
  let fetched = data.name;

  return (
    <div className="hook">
      <div>useEffect 2</div>
      <div>{fetched}</div>
      <div>
        <button
          className="btn"
          onClick={() => {
            setUrl("/piot.json");
          }}
        >
          piot
        </button>
        <button
          className="btn"
          onClick={() => {
            setUrl("/tom.json");
          }}
        >
          tom
        </button>
      </div>
    </div>
  );
};

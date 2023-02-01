import React, { useEffect, useRef, useState } from "react";

interface UseRefProps {}

export const UseRef: React.FC<UseRefProps> = ({}) => {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  // useRef DOES NOT CAUSE RERENDERS
  const renderCountRef = useRef(0);
  // {current: 0}

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  let prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  let anotherInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    anotherInputRef.current?.focus();
  }, []);

  return (
    <div className="hook">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setRenderCount((prev) => prev + 1);
        }}
      />
      <input type="text" ref={anotherInputRef} />
      <div>
        my name is {name}, count rendered {renderCount} times and{" "}
        {renderCountRef.current} by useRef. my name used to be{" "}
        {prevName.current}
      </div>
      <button
        onClick={() => {
          inputRef?.current?.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};

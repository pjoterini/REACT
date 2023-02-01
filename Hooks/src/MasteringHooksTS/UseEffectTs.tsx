import React, { useEffect, useState } from "react";

interface UseEffectTsProps {}

export const UseEffectTs: React.FC<UseEffectTsProps> = ({}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="hook">
      <div>{value}</div>
    </div>
  );
};

import React from "react";
import { Button } from "./Button";

interface EventPropsProps {}

export const EventProps: React.FC<EventPropsProps> = ({}) => {
  return (
    <div className="hook">
      <Button
        handleClick={(e, id) => {
          console.log("btn click", e);
        }}
      />
    </div>
  );
};

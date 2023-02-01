import React from "react";

interface ButtonProps {
  handleClick: (e: React.MouseEvent, id: number) => void;
}

export const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={(e) => handleClick(e, 1)}>click</button>;
};

import React, { useContext } from "react";
import UserContext from "./store";

interface UseContextTsNestedProps {}

export const UseContextTsNested: React.FC<UseContextTsNestedProps> = ({}) => {
  const user = useContext(UserContext);
  return <div>{user.first}</div>;
};

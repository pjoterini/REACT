import { createContext } from "react";

const initialState = {
  first: "piot",
  age: 25,
};

export type UserState = typeof initialState;
const UserContext = createContext<typeof initialState>(initialState);

export default UserContext;

import { createContext } from "react";

const initialState = {
  first: "jack",
  last: "herrington",
};

export type UserState = typeof initialState;

const contexxt = createContext<UserState>(initialState);

export default contexxt;

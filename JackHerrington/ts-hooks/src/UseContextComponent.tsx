import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function Consumer() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>first: {user.first}</div>
      <div>last: {user.last}</div>
    </div>
  );
}

export const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "yao",
    last: "mao",
  });

  return (
    <UserContext.Provider value={user}>
      <Consumer />
      <button onClick={() => setUser({ ...user, last: "biu" })}>
        Change Context
      </button>
    </UserContext.Provider>
  );
};

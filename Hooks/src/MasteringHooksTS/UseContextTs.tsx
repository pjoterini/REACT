import React, { useState } from "react";
import UserContext, { UserState } from "./store";
import { UseContextTsNested } from "./UseContextTsNested";

export const UseContextTs: React.FC = () => {
  const [user, setUser] = useState<UserState>({
    first: "sam",
    age: 15,
  });

  return (
    <div className="hook">
      <UserContext.Provider value={user}>
        <UseContextTsNested />
        <button onClick={() => setUser({ first: "jane", age: 19 })}>
          change context
        </button>
      </UserContext.Provider>
      <UseContextTsNested />
    </div>
  );
};

import { createContext, useEffect, useReducer } from "react";

interface ContextProvider {
  children: React.ReactNode;
}

interface StateProps {
  user: {
    email: string;
    token: string;
  } | null;
}

interface ContextValue {
  authState: StateProps;
  dispatch: any;
}

export const AuthContext = createContext<ContextValue | null>(null);

export const authReducer = (authState: StateProps, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return authState;
  }
};

export const AuthContextProvider = ({ children }: ContextProvider) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext authState: ", authState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

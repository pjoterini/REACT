import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { authState } = useAuthContext();
  const user = authState.user;

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="flex justify-start p-8 bg-indigo-900 shadow-md uppercase font-light">
        <Link to="/">
          <h1 className="text-cyan-200 text-3xl cursor-pointer hover:text-white hover:animate-bounce  ">
            Workout Buddy
          </h1>
        </Link>
        {user ? (
          <div>
            <span>{user.email}</span>
            <button onClick={handleLogout}>LOGOUT</button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <h1 className="text-cyan-200 text-3xl cursor-pointer hover:text-white hover:animate-bounce  ">
                Login
              </h1>
            </Link>
            <Link to="/signup">
              <h1 className="text-cyan-200 text-3xl cursor-pointer hover:text-white hover:animate-bounce  ">
                Signup
              </h1>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

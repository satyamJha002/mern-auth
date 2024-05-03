import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Login/Signup App</h1>
        </Link>
        <ul className="flex gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

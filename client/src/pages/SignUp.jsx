import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          id="firstName"
          placeholder="Enter FirstName"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="text"
          id="lastName"
          placeholder="Enter LastName"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Register
        </button>
      </form>

      <div className="flex gap-4 mt-5">
        <p>Have an account?</p>
        <Link to="/login">
          <span className="text-blue-500">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

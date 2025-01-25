/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      setMessage("Login successful!");
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setMessage("Login failed. Please try again.");
      console.error(err.response?.data || "An error occurred");
    }
  };

  return (
    <div className="bg-slate-600 flex justify-center items-center min-h-screen">
      <div className="bg-green-300 w-full p-5 shadow-2xl rounded-3xl max-w-md">
        <h1 className="font-bold text-3xl text-center mb-4">Login</h1>
        <form className="my-3 space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

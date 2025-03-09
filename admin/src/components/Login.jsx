import React, { useState } from "react";
import axios from "axios";
import { backEndURL } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backEndURL.endsWith('/') ? `${backEndURL}api/user/admin` : `${backEndURL}/api/user/admin`, {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="px-8 py-6 max-w-md bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Email Address:
            </p>
            <input
              className="px-3 py-2 w-full rounded-md border outline-none border-gary-300"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="relative mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">Password:</p>
            <input
              className="px-3 py-2 w-full rounded-md border outline-none border-gary-300"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)} 
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            className="px-4 py-2 mt-2 w-full text-white bg-black rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

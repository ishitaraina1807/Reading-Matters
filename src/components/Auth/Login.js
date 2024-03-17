import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const { dispatch } = useContext(AuthContext); 
  const navigate = useNavigate();
  const location = useLocation();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (values.email === "" || values.password === "") {
      setErrorMsg("Both email and password are required.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      dispatch({ type: "LOGIN", payload: user });

      const { from } = location.state || { from: { pathname: "/search" } };
      navigate(from);
    } catch (error) {
      console.error("Error logging in: ", error);
      const errorCode = error.code;
      let errorMessage = "Invalid email or password. Please try again.";

      if (errorCode === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email.";
      } else if (errorCode === "auth/wrong-password") {
        errorMessage = "Invalid password. Please try again.";
      }

      setErrorMsg(errorMessage);
    }
  };

  return (
    <div className="p-6 text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-80 bg-darkblue p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white text-customblack rounded px-3 py-2 focus:outline-0"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-white text-customblack rounded px-3 py-2 focus:outline-0"
              value={values.password}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="flex justify-center items-center text-sm my-2">
            <span className="text-gray-800">Don't have an account?</span>
            &nbsp;&nbsp;
            <span
              className="text-white font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
            {errorMsg && <p className="text-red-300 mt-2 mb-2 text-sm flex justify-center">{errorMsg}</p>}

            <button
              type="submit"
              className="w-full bg-white text-darkblue rounded py-2 hover:text-white hover:bg-lightblue"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

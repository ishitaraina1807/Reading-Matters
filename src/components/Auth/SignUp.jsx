import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (values.username === "" || values.email === "" || values.password === "") {
      setErrorMsg("All fields are required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: values.username,
      });

      const userData = {
        name: values.username,
        favoriteBooks: [],
        readingList: [],
      };
      
      try {
        setDoc(doc(db, "users", user.uid), userData)
      } catch (error) {
        console.error("Error writing document:", error.message);
      }

      navigate("/search", { state: { name: values.username } });
    } catch (error) {
      console.error("Error signing up: ", error);
      const errorCode = error.code;
      let errorMessage = "Error signing up. Please try again.";

      if (errorCode === "auth/email-already-in-use") {
        errorMessage = "Email address is already in use. Please use a different one.";
      }

      setErrorMsg(errorMessage);
    }
  };

  return (
    <div className="p-6 text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-80 bg-darkblue p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full bg-white text-customblack rounded px-3 py-2 focus:outline-0"
                value={values.username}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, username: event.target.value }))
                }
                required
              />
            </div>
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
            <span className="text-gray-800">Already have an account?</span>
            &nbsp;&nbsp;
            <span
              className="text-white font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
            {errorMsg && <p className="text-red-300 mt-2 mb-2 text-sm flex justify-center">{errorMsg}</p>}

            <button
              type="submit"
              className="w-full bg-white text-darkblue rounded py-2 hover:text-white hover:bg-lightblue"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

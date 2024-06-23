import React, { useState } from "react";
import { signInWithGoogle } from "../utils/firebase"; // Ensure the correct path
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setErrorMessage("Failed to sign in with Google");
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GSmVcg-WEzO7Cfr6U7tcxBBthzLV6f6cGA&s"
        alt="logo"
        className="absolute top-0 left-0 m-1 w-32 h-24 object-contain"
      />
      <div className="w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80 flex flex-col items-center">
        <h1 className="font-bold text-3xl py-4">Sign In </h1>
        <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-yellow-700 w-full rounded-lg flex items-center justify-center"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="inline mr-2" />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

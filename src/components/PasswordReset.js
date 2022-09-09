import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const handleSubmit = async () => {
    try {
      await resetPassword(emailRef.current.value);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-2 flex justify-center">
        Reset Password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
            className="border p-3"
            required
          ></input>
          <label className="py-2 font-small">Enter email address</label>
        </div>

        <div className="flex flex-col py-2">
          <button
            type="submit"
            className="border py-2 text-white bg-red-800 hover:bg-red-700"
          >
            Reset Password
          </button>
        </div>
        <Link to="/">
          <div className="flex justify-center py-3 mt-1">
            <p className="font-small hover:text-blue-600">Return to Sign In</p>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default PasswordReset;

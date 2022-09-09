import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUser(emailRef.current.value, passwordRef.current.value);
      navigate("/account");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-2">Sign In</h1>
      <h3>{error}</h3>
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
          <label className="py-2 font-medium">Email</label>
        </div>

        <div className="flex flex-col py-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            className="border p-3"
            required
          ></input>
          <label className="py-2 font-medium">Password</label>
        </div>
        <div className="flex flex-col py-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white w-full py-4 my-2"
            disabled={loading}
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="to-login-page">
        <p className="py-2">
          New here? <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

//this page will be for users to sign up and access their logged-in home (private routes) for order history + to make profile changes
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";


const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { createUser,currentUser } = useAuth();

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("")
      setLoading(true)
      await createUser(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  
  return (
    <>
      <h2 className="flex py-3">Sign Up</h2>
      {/* <h3>{currentUser.email}</h3> */}
      <h3>{error}</h3>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          className="bg-gray-100 border-2 border-black p-1 rounded-lg"
          required
        ></input>
        <label>Email</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          className="bg-gray-100 border-2 border-black p-1 rounded-lg"
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password-confirm"
          placeholder="Password"
          className="bg-gray-100 border-2 border-black p-1 rounded-lg"
          ref={passwordConfirmRef}
          required
        ></input>
        <label>Confirm Password</label>
        <button type="submit" className="bg-gray-200" disabled={loading}>
          Sign Up
        </button>
      </form>

      <div className="to-login-page">
        <p>Already have an account? Login</p>
      </div>
    </>
  );
};

export default Signup;

// import { useState, useEffect } from "react";
import AuthProvider from "../context/AuthContext";
import Signup from "./Signup";
import Signin from "./Signin";
import Account from "./Account";
import Navbar from './Nav/Navbar';
import PasswordReset from "./PasswordReset";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {

  return (
    <div className="app-container">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route
            path={"/account"}
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        <Route path={"/password-reset"} element={<PasswordReset />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

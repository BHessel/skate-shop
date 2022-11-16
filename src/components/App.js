// import { useState, useEffect } from "react";
import AuthProvider from "../context/AuthContext";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import Account from "./Account";
import Navbar from "./Nav/Navbar";
import PasswordReset from "./PasswordReset";
import Products from "./Products";
import ProductPage from "./ProductPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="max-w-screen-xl m-auto">
      <AuthProvider>
        <div className="bg-white sticky top-0 z-20">
          <Navbar />
        </div>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          {/* nest product routes when I get there, e.g. products/decks/7 (all products, product type (deck) specific, item specific) */}
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

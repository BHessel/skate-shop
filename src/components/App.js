// import { useState, useEffect } from "react";
import AuthProvider from "../context/AuthContext";
import Signup from "./Signup";
import Signin from "./Signin";
import Account from "./Account";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import { db } from "../firebase-config";
// import { collection, getDocs,  } from "firebase/firestore";

function App() {
  // const [ users, setUsers ] = useState([])
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const getUsersData = await getDocs(usersCollectionRef);
  //     setUsers(getUsersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   return () => {
  //     getUsers();
  //   };
  // }, [usersCollectionRef]);

  return (
    <div className="app-container">
      <h1>Main Page for Site - App.js</h1>
      <AuthProvider>
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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

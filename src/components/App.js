// import { useState, useEffect } from "react";
import AuthProvider from "../context/AuthContext";
import Signup from "./Signup";
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
    <AuthProvider>
      <div className="app-container">
        <Signup />
      </div>
    </AuthProvider>
  )
}

export default App;

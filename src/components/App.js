import { useState, useEffect } from "react";
import Signup from "./Signup"
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
    <div className="App">
      <h1>hello world</h1>
      <Signup />
    </div>
  );
}

export default App;

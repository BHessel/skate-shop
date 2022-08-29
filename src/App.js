import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge });
  };

  useEffect(() => {
    const getUsers = async () => {
      const getUsersData = await getDocs(usersCollectionRef);
      setUsers(getUsersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return () => {
      getUsers();
    };
  }, [usersCollectionRef]);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      <h1>Hello World</h1>
      {users.map((user, i) => (
        <div key={i}>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./add.css";
function Add() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newDesc, setDesc] = useState("");
  const [newURL, setURL] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "products");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      price: Number(newAge),
      description: newDesc,
      URL: newURL,
      quantity: 0,
    });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          <input
            placeholder="Product Name..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Price..."
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
          <input
            placeholder="Description..."
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
          <input
            placeholder="Image URL..."
            onChange={(event) => {
              setURL(event.target.value);
            }}
          />

          <button className="btn btn-success" onClick={createUser}>
            {" "}
            Create Product
          </button>
        </div>
      </div>
    </>
  );
}

export default Add;

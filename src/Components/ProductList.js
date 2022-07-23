import React, { Component } from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function ProductList(props) {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "products");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return users.map((user, i) => {
    return <Product x={user} key={i} index={i} setBill={props.changeBill} />;
  });
}

export default ProductList;

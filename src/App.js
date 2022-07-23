import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer.js";
import Checkout from "./Components/Checkout";
import React, { useState } from "react";
import Add from "./Components/addProduct";

export default function App() {
  //function to increment the cart items
  const updateBill = (bill) => {
    const newBill = total + bill;
    setTotal(newBill);
  };

  const [total, setTotal] = useState(0);
  const [totalItems, setItems] = useState(0);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <main className="container mt-5">
                  {" "}
                  <ProductList changeBill={updateBill} />
                </main>
                <Footer total={total} totalItems={totalItems} />
              </>
            }
          />
          <Route
            exact
            path="/add"
            element={
              <>
                <Navbar />
                <main className="container mt-5">
                  {" "}
                  <Add />
                </main>
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Navbar />
                <Checkout total={total} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

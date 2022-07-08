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
import buzz from "./images/buzz.jpg";
import slash from "./images/slash.jpg";

export default function App() {
  const ProdList = [
    {
      name: "Paper Leather Hat",
      price: 999,
      quantity: 0,
      image: { slash },
      describe:
        "The iconic hat inspired from probably the greatest guitarist of all time made completely out of recycled paper collected from door to door trash.",
    },
    {
      name: "Buzz Lightyear Gun",
      price: 800,
      quantity: 0,
      image: { buzz },
      describe:
        "A recyled plastic toy made from used plastic bags and bottles and crafted into an attractive kids' toy",
    },
    {
      name: "Nirvana Unisex Oversized T-Shirt - Black",
      price: 699,
      quantity: 0,
      image: { slash },
      describe:
        "The classic Nirvana shirt which made out of waste cloths and fabrics that had been disposed off earlier.",
    },

    {
      name: "Recycled Earth Blanket",
      price: 699,
      quantity: 0,
      image: { slash },
      describe:
        "The Australian company Seljak makes beautiful blankets out of 100 percent recycled materials—mainly wool and polyester, but the company says 15 percent is other recycled fibers. Even better, each blanket is made from production scraps, so there's little waste. This is a pricey blanket, but it's one you can feel good about (while keeping warm).",
    },

    {
      name: "A Better Water Bottle",
      price: 699,
      quantity: 0,
      image: { slash },
      describe:
        "Swapping out single-use plastic for a reusable water bottle is a big step on its own to reduce waste. Whichever bottle you like to drink out of is the one you should go with. But Klean Kanteen also now makes some of its options from 90 percent recycled stainless steel. Even better? You can put them in the dishwasher.",
    },
  ];
  console.log(ProdList);
  const [prodLst, setProductList] = useState(ProdList);

  //function to increment the cart items
  const incrementQ = (index) => {
    let newprdlist = [...prodLst];
    newprdlist[index].quantity++;
    setProductList(newprdlist);
    let newTotal = total + prodLst[index].price;
    setTotal(newTotal);
    let newItems = totalItems++;
    setItems(newItems);
  };

  //function to decrement the cart items
  const decrementQ = (index) => {
    let newprdlist = [...prodLst];
    if (newprdlist[index].quantity > 0) {
      newprdlist[index].quantity--;
      setProductList(newprdlist);
      let newTotal = total - prodLst[index].price;
      setTotal(newTotal);
    } else {
      alert("Invalid Operation");
    }
  };

  // reset the shopping cart
  const reset = () => {
    let newList = [...prodLst];
    newList.map((item) => {
      item.quantity = 0;
    });
    setProductList(newList);
    setTotal(0);
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
                  <ProductList
                    list={prodLst}
                    incrementQ={incrementQ}
                    decrementQ={decrementQ}
                  />
                </main>
                <Footer total={total} totalItems={totalItems} reset={reset} />
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

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer.js";
import React, { useState } from "react";
import buzz from "./images/buzz.jpg";
import slash from "./images/slash.jpg";

export default function App() {
  const ProdList = [
    {
      name: "Slash Hat",
      price: 999,
      quantity: 0,
      image: { slash },
      describe:
        "The iconic hat of probably the greatest guitarist of all time wrapped with his favourite belt that adds on to its slick look",
    },
    {
      name: "Buzz Lightyear Gun",
      price: 800,
      quantity: 0,
      image: { buzz },
      describe:
        "Get on the journey to infinity and beyond and shoot off invaders with the limited edition Buzz Lightyear Beep Beep Gun",
    },
    {
      name: "Nirvana Unisex Oversized T-Shirt - Black",
      price: 699,
      quantity: 0,
      image: { slash },
      describe:
        "The classic Nirvana shirt which Kurt Cobain himself did not know off. For all the Nirvana fans who can't name even 5 songs by the band",
    },
  ];
  console.log(ProdList);
  const [prodLst, setProductList] = useState(ProdList);
  const incrementQ = (index) => {
    // alert("Parent Reached");
    let newprdlist = [...prodLst];
    newprdlist[index].quantity++;
    // alert(`New Quantity of ${index} is ${newprdlist[index].quantity++}`);
    setProductList(newprdlist);
    let newTotal = total + prodLst[index].price;
    setTotal(newTotal);
    let newItems = totalItems++;
    setItems(newItems);
  };
  const decrementQ = (index) => {
    // alert("Parent Reached");
    let newprdlist = [...prodLst];
    if (newprdlist[index].quantity > 0) {
      newprdlist[index].quantity--;
      setProductList(newprdlist);
      let newTotal = total - prodLst[index].price;
      setTotal(newTotal);
    } else {
      alert("Invalid Operation");
    }
    // alert(`New Quantity of ${index} is ${newprdlist[index].quantity++}`);
  };

  const reset = () => {
    setProductList(ProductList);
    setTotal(0);
    alert("Cart Reset");
  };

  const [total, setTotal] = useState(0);
  const [totalItems, setItems] = useState(0);
  return (
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
  );
}

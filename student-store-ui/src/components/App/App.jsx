import * as React from "react"
// import {BrowserRouter} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css"

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function App() {
  const [products, setProductStat] = useState([]);
  const [isFetching, setFetchingStat] = useState(false);
  const [isOpen, setOpenStat] = useState(false);
  const [shoppingCart, setShoppingCartStat] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ "name": "", "email": "" });
  const [checkoutFormStat, setCheckoutFormStat] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [error, setErrorStat] = useState("");
  const URL = "https://codepath-store-api.herokuapp.com/store";
  useEffect(async () => {
    const { data } = await axios(URL)
      .catch(function (error) {
        setLoading(true)
      })
    setProductStat(data.products)
  }, [])

  function handleOnToggle() {
    setOpenStat(!isOpen);
  };
  function handleAddItemsToCart(productId) {
    // TODO: It should add that product to the shoppingCart if
    // it doesn't exist, and set its quantity to 1.
    //  It should add the price of the product to the total
    // price of the shoppingCart.
    let temp = [...shoppingCart];
    let inCart = false;

    temp = temp.map((item) => {
      if (item.itemId === productId) {
        inCart = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      else {
        return item;
      }

    }
    );
    if (!inCart) {
      temp = [...temp, { itemId: productId, quantity: 1 }];
    }
    setShoppingCartStat(temp)

  };
  function handleRemoveItemToCart(productId) {
    let temp = [...shoppingCart];
    let inCart = false;

    temp = temp.map((item) => {
      if (item.quantity != undefined && item.itemId === productId) {
        inCart = true;
        return { ...item, quantity: item.quantity - 1 };
      }
      else {
        return;
      }

    }
    );
    if (!inCart) {
      temp = [...temp, { itemId: productId, quantity: 0 }];
    }
    setShoppingCartStat(temp)
  };
  const handleOnCheckoutFormChange = (name, value) => {
    //TODO: It should update the checkoutForm object
    // with the new value from the correct input(s)
    console.log("changing checkout form : ", name)
    console.log("shopping cart", shoppingCart)
    var newCheckout = checkoutForm;
    newCheckout[name] = value
    setCheckoutForm(newCheckout)
  };
  function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart) {
    console.log("handleOnSubmitCheckoutForm")
    if (shoppingCart.length == 0) {
      setErrorStat("Error: Empty Cart")
      setCheckoutFormStat(false)
    }
    else {
      axios.post(URL, { user: checkoutForm, shoppingCart: shoppingCart }
      )
        .catch((err) => {
          setErrorStat(err.message)
          setCheckoutFormStat(false)
        })
        .then((value) => {
          console.log(value)
          setReceipt(value.data.purchase.receipt.lines);
          setCheckoutFormStat(true)
          setShoppingCartStat([])
          setCheckoutForm({ "name": "", "email": "" })
        }
        )
    }
  };

  return (
    <div className="app">
      <BrowserRouter>

        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleCheckoutForm={handleOnCheckoutFormChange} handleSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleToggle={handleOnToggle} stat={checkoutFormStat} receiptVal={receipt} />
          <Routes>
            <Route path="/" element={<Home products={products} handleAddItemsToCart={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} />} />
            <Route path="/products/:productId" element={<ProductDetail handleAddItemsToCart={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Menu /> */}

        </main>
      </BrowserRouter>
    </div>
  )
};

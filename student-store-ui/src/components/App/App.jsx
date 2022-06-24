import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import HeroBanner from "../Home/HeroBanner/HeroBanner"
import Footer from "../Footer/Footer"
import About from "../About/About"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  let user = {name: "", email: ""}
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({})
  const [query, setQuery] = useState("")
  const URL = 'https://codepath-store-api.herokuapp.com/store'

  useEffect(() => {
    const getData = async() => {
      setIsFetching(true)
      try{
        const {data} = await axios.get(URL);
        setProducts(data.products)
        if (data.products.length == 0){
          setError("no products")
        }
      }
      catch(err){
        setError(err)
      }
    }
    getData();
    setIsFetching(false)
  }, []);

  useEffect(() => {
    if (products) {
      setIsFetching(false);
    }
  }, [products]);

  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  }

  function handleAddItemToCart(productId) {

    for (let i = 0; i<shoppingCart.length; i++){
      if (shoppingCart[i].itemId == productId){
        
        shoppingCart[i].quantity += 1;
        setShoppingCart([...shoppingCart]);
        return;
      }
    }
    const newItem = {
      itemId: productId,
      quantity: 1,
      key: productId,
    }
    setShoppingCart([...shoppingCart, newItem])
  }

  function handleRemoveItemFromCart(productId) {
      for (let i = 0; i<shoppingCart.length; i++){
        if (shoppingCart[i].itemId == productId){
          if (shoppingCart[i].quantity -1 == 0){
            shoppingCart.splice(i,1)
            setShoppingCart([...shoppingCart])
          }
          else{
            shoppingCart[i].quantity -=1 
            setShoppingCart([...shoppingCart])
          }
        }
      // }
    }
  }

  function handleOnCheckoutFormChange(name, value){
    // var key = event.target.name
    // var val = event.target.value

    // let newForm = {
    //   name: checkoutForm.name,
    //   email: checkoutForm.email
    // }

    // newForm[key] = val
    // setCheckoutForm(newForm)

    if (name === "email") {
      setCheckoutForm((checkoutForm) =>
        ({ name: checkoutForm.name, 
          email: value })
    )}

    else if (name === "name") {
      setCheckoutForm((checkoutForm) =>
        ({ name: value, 
          email: checkoutForm.email })
          
    )}
  }

  function handleOnSubmitCheckOutForm(checkoutForm, shoppingCart){
    let user = {
      name: checkoutForm.name,
      email: checkoutForm.email
    }
    
    let userOrder = {
      user: user,
      shoppingCart: shoppingCart
    }
    if (userOrder.shoppingCart.length == 0){
      setError("please add items to cart")
    }
    

    axios.post(URL, { userOrder
    })
    .then((response) => {
      setError("success")
      
    }, (error) => {
      setError("problem fetching data") 
    });

    if (checkoutForm.name.length == 0 || checkoutForm.email.length == 0) {
      setError("User info must include an email and name.")
    }

    setCheckoutForm({name:"", email: ""})
    setShoppingCart([])
  }

  function handleOnSearch(products, query){
    console.log('products: ', products);
    console.log('query: ', query);

    let searchResults = [];
    console.log('searchResults: ', searchResults);
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(query)){
        searchResults.push(product)
      }
    })
    setProducts(searchResults)
    console.log('products: ', products);
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        
        <main>
          {/* YOUR CODE HERE! */}
          <div className="container">
            <Sidebar 
            isOpen = {isOpen} 
            shoppingCart ={shoppingCart} 
            products={products} 
            checkoutForm={checkoutForm} 
            handleOnCheckoutFormChange ={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckOutForm} 
            handleOnToggle = {handleOnToggle} 
            error = {error}/>

            <div className="wrapper">
              <div className="navwrapper">
                <Navbar />
              </div>
              <div className="home">
              <Routes>
                <Route exact path="/#about" component={About}/>
                <Route exact path="/#contact" component={Footer}/>
                <Route path="/" element={<Home 
                products = {products} 
                handleOnToggle = {handleOnToggle} 
                handleAddItemToCart = {handleAddItemToCart} 
                handleRemoveItemFromCart = {handleRemoveItemFromCart} 
                shoppingCart = {shoppingCart}
                query = {query}
                setQuery = {setQuery}
                handleOnSearch = {handleOnSearch}
                />} 
                />

                <Route path="/products/:productId" element={<ProductDetail 
                setError={setError} 
                products ={products} />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              </div>
              <About />
              <Footer />
            </div>
          </div>
          
          
          {/* <HeroBanner/> */}
        </main>
        
      </BrowserRouter>
    </div>
  )
}

import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
export default function ProductGrid({products ,handleAddItemsToCart, handleRemoveItemToCart}) {
  // const [loadedProd, setLoadedProd] = useState(null);
  // const currentLoaded = products.
  const [showMenu, setShowMenu] = useState(true);
  const [searched, setSearched] = useState("");
  const regexp = new RegExp(searched, "i")
  const [clickedCategory, setClickedCategory] = useState("");
  let currSearch =  products.filter((products) => regexp.test(products.name))
  let currProds = products.filter((product, idx) => product.category == clickedCategory);
  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  }
  const handleClick = (category) => {
    setClickedCategory(category);
  }
  const handleSearched = (event) => {
    const searched = event.target.value
    setSearched(searched);
  };
  return (
    <section className="products">
      
      <div id="cover">
      <form method="get" onChange={(event) => handleSearched(event)}>
        <div className="tb">
          <div className="td">
              <input className="search-text" type="text" required/>
          </div>
          <div className="td" id="s-cover">
            <button className="search" type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
    {showMenu == true
      ?<div className="menu">
      <ul className="category-menu open">
      <button class="toggle-menu" onClick={() => handleShowMenu()}>
        <i className="material-icons">menu</i>
      </button>
          <li>
              <button className="menu-btn" onClick={() => handleClick("")}>All Categories</button>
          </li>
          <li>
              <button className="menu-btn" onClick={() => handleClick("clothing")}>Clothing</button>
          </li>
          <li>
              <button className="menu-btn" onClick={() => handleClick("food")}>Food</button>
          </li>
          <li>
              <button className="menu-btn" onClick={() => handleClick("accessories")}>Accessories</button>
          </li>
          <li>
              <button className="menu-btn" onClick={() => handleClick("tech")}>Tech</button>
          </li>
      </ul>
  </div>
  : <button class="toggle-menu" onClick={() => handleShowMenu()}>
        <i className="material-icons">menu</i>
      </button>
    }
       
      <div className="products-grid" id="Buy">
        { searched != "" && clickedCategory != ""
        ? currSearch
          .filter((products, idx) => products.category == clickedCategory)
          .map((product, idx) => (
            <ProductCard  product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false} key={idx}/>
          ))
        : searched == "" && clickedCategory == ""
        ? products.map((product, idx) => (
            <ProductCard  product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false} key={idx}/>
          ))
        : searched == ""
        ? currProds.map((product, idx) => (
          <ProductCard  product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false} key={idx}/>
        ))
        : currSearch.map((product, idx) =>(
          <ProductCard  product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false} key={idx}/>
        ))
        }
      </div>
    </section>
  )
}
 
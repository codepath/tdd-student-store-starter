import * as React from "react"
import "./Menu.css"
import { useState } from "react"
import ProductGrid from "../ProductGrid/ProductGrid";
export default function Menu(products,) {
    const [category, setCategory] = useState("");
    const [filteredProduct, setFilteredProduct] = useState("");
    function showAll(){
        setCategory("All")
    }
    function showClothing(){
        setCategory("Clothing")
    }
    function showFood(){
        setCategory("Food")
    }
    function showAccessories(){
        setCategory("Accessories")
    }
    function showTech(){
        setCategory("Tech")
    }
  return (
    <div className="menu">
        <ul className="category-menu open">
            <li>
                <button className="menu-btn" onClick={() => showAll()}>All Categories</button>
            </li>
            <li>
                <button className="menu-btn" onClick={() => showClothing()}>Clothing</button>
            </li>
            <li>
                <button className="menu-btn" onClick={() => showFood()}>Food</button>
            </li>
            <li>
                <button className="menu-btn" onClick={() => showAccessories()}>Accessories</button>
            </li>
            <li>
                <button className="menu-btn" onClick={() => showTech()}>Tech</button>
            </li>
        </ul>
        {/* <ProductGrid products={products} handleAddItemsToCart ={handleItemToCart} handleRemoveItemToCart= {handleRemoveItemToCart} category={category}/> */}
    </div>
    
  )
}
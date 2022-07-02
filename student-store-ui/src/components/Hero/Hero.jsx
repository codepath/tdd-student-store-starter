import * as React from "react"
import "./Hero.css"
import ProductGrid from "../ProductGrid/ProductGrid"
export default function Hero(products, handleAddItemsToCart, handleRemoveItemToCart) {
  return (
    <div className="hero">
        <section className='banner'>
          <img className="hero-image" src="https://i.pinimg.com/originals/44/3b/44/443b44dfcaf450db93d35c2a5ca5d5c3.gif"></img>
       </section>
  </div>
  )
}
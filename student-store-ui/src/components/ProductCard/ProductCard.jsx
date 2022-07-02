import * as React from "react"
import "./ProductCard.css"
import {
  Link
} from "react-router-dom";
export default function ProductCard({ product, productId, quantity, handleAddItemsToCart, handleRemoveItemToCart, showDescription }) {
  // const handleExpansion(product) => {

  // };
  return (
    <section className="product-card">
      <div class="product-card">
        <h1 className="product-name">{product.name}</h1>
        {/* <div className="product-price">${price}</div> */}
        {/* TODO: FIX according sto specifications */}
        <Link to={"/products/" + product.id}>
          {/* TODO: Get it to navigate to description page when clicked */}
          <img className="product-img" src={product.image}></img>
        </Link>
        <div className="product-container">
          <button className="add" onClick={() => handleAddItemsToCart(productId)}>
            <h3>+</h3>
          </button>
          <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>
            <h3>-</h3>
          </button>
        </div>
        <div className="product-price">
          <p className="price">Price: ${product.price.toFixed(2)}</p>
        </div>
        {showDescription == true
          ? <div className="product-description"><p className="description">{product.description}</p></div>
          : <div></div>
        }
      </div>
    </section>
  )
}

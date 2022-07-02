import * as React from "react"
import "./ProductView.css"
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react"
import Menu from "../Menu/Menu";
import ProductCard from "../ProductCard/ProductCard";
export default function ProductView({product, productId, quantity, handleAddItemsToCart, handleRemoveItemToCart}) {
  return (
        <div className="product-view">
          <Menu />
          <h1 className="product-id">Product # {productId}</h1>
          <div className="container-view">
          <ProductCard product={product} productId={product.id} 
            quantity={product.quantity} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={true}/>
          </div>
        </div>
  )}
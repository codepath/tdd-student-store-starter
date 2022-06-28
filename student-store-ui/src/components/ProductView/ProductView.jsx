import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart}) {
    return (
        <div className="product-view">
            <h1 className="product-id">Product #{ productId }</h1>
            {/* <ProductCard /> */}
        </div>
    )
}
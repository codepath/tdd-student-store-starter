import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product, onAddClickHandler }) {
      
    return (
        <div className="product">
            <Link to={`products/` + product.id}><img src={ product.image } alt={ product.name } /></Link>
            <p>{ product.name }</p>
            <p>${ product.price }</p>
            <button onClick={ () => onAddClickHandler(product.id) }>+</button>
            <button>-</button>
        </div>
    )
}
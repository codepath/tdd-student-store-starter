import * as React from "react"
import "./ShoppingCart.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
export default function ShoppingCart({ isOpen, products, shoppingCart }) {

    const findProduct = (productId) => {

        if (productId != null) {
            const foundProduct = products.find(
                (product) => product.id === productId.itemId
            )
            console.log("found product", foundProduct)
            console.log("productId: ", productId)

            return foundProduct;

        }
        else {
            return
        }
        // console.log("product.id: ", product.id)
    }

    const calculateSubtotal = (shoppingCart) => {
        let subtotal = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            subtotal += findProduct(shoppingCart[i])?.price * shoppingCart[i].quantity
        }
        console.log("fixed calculate subtotal val: ", subtotal.toFixed(2))
        return subtotal.toFixed(2);

    }
    const calculateTotal = (shoppingCart) => {
        let subtotal = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            subtotal += findProduct(shoppingCart[i])?.price * shoppingCart[i].quantity
        }
        let total = subtotal + (subtotal * 0.0875)
        return total.toFixed(2);
    }
    return (
        <div className="shopping-cart">
            <div className="shopping-cart-container">
                {shoppingCart == null
                    ? <p className="notification">No items added to cart yet. Start shopping now!</p>
                    : shoppingCart
                        .map((productId, idx) => (
                            <div className="cart-item">
                                <p className="cart-product-name">Item: {findProduct(productId).name}</p>
                                <p className="cart-product-quantity">Quantity: {productId.quantity}</p>
                            </div>


                        )
                        )
                }
                <div className="totals">
                    <p className="total-price">Subtotal: {calculateSubtotal(shoppingCart)}</p>
                    <p className="total-price">Taxes: {calculateTotal(shoppingCart)}</p>
                </div>

            </div>
        </div>
    )
}

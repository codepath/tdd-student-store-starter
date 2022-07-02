import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/Checkout"
import Receipt from "../Receipt/receipt"
export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleCheckoutForm, handleSubmitCheckoutForm, handleToggle, stat, receiptVal }) {

  return (
    <section className="sidebar">
      {isOpen == true
        ? <div className="open">
          <div className="cart-icons">
            <button class="toggle-button button open" onClick={handleToggle}>
              <i className="material-icons md-48">arrow_backward</i>
            </button>
            <span className="cart-icons icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} products={products} />
            <span className="cart-icons icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutForm={handleCheckoutForm} handleOnSubmitCheckoutForm={handleSubmitCheckoutForm} stat={stat} />
            <span className="cart-icons icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
            <Receipt receipt={receiptVal} />
          </div>
        </div>
        : <div className="close">
          <div className="cart-icons">
            <button className="toggle-button button closed" onClick={handleToggle}>
              <i className="material-icons md-48">arrow_forward</i>
            </button>
          </div>
        </div>
      }
    </section>
  )
}

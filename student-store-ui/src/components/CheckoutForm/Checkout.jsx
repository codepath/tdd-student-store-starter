import * as React from "react"
import "./Checkout.css"

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutForm, handleOnSubmitCheckoutForm, stat }) {
    return (
        <section className="checkout-form" id="Checkout">
            <div className="checkout-content">
                <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath..org" value={checkoutForm.email} onChange={(event) => handleOnCheckoutForm("email", event.target.value)}></input>
                <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={checkoutForm.name} onChange={(event) => handleOnCheckoutForm("name", event.target.value)}></input>
                <button className="checkout-button" onClick={() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}>
                    <h3>Checkout</h3>
                </button>
            </div>
            {
                stat == true
                    ? <p className="success">{stat}</p>
                    : <p className="error">{stat}</p>
            }

        </section>
    )
}

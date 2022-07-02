
//  It should allow POST requests to the /store endpoint:
//  The endpoint should create purchase orders for users and save them to the db.json file
//  The endpoint should accept a request body that contains shoppingCart and user fields.
//  The shoppingCart field should contain the user's order.
//  This should be an array of objects.
//  Each object in the array should have two fields:
//  The itemId field should store the id of the item being purchased
//  The quantity field should store a number representing how many of that item the user is purchasing.
//  The user field should contain the name and email of the person placing the order.
//  When either the shoppingCart or user fields are missing, it should throw a 400 error.
//  If there are duplicate items in the shoppingCart, it should throw a 400 error.
//  If either the quantity or itemId field is missing for any of the items in the shoppingCart, a 400 error should be thrown.
//  When both are there, it should calculate the total cost of all the items (including quantities), add a 8.75% tax to the total, and create a new purchase object containing 6 required fields and 1 optional field:
// required:
//  id - the new id of the purchase should be equal to one more than the current number of existing purchases
//  name - the name of the user making the purchase
//  email - the email of the user making the purchase
//  order - the shoppingCart value sent in the POST request
//  total - the calculated total of the order
//  createdAt - a string representation of the date and time when the order was placed
// optional:
//  receipt - text describing the order (what might go on a receipt)
//  It should then send a JSON response back to the client with the new purchase like so: { "purchase": purchase }. The response should have a 201 status code for a resource created action.
// const { useParams } = require('react-router-dom');
const express = require("express");
const { listProducts } = require("../models/store");
const router = express.Router();
const app = express()
const storeModel = require('../models/store');
// let { productId } = useParams;
// It should respond to GET requests to /store with an array of
// all products in the store in this format: { "products": products }
router.get("/products", function (req, res, next) {
    console.log("test 3");
    try {
        const products = storeModel.listProducts();
        res.status(200).send({ "products ": products });
    }
    catch (err) {
        next(err);
    }


})
//  It should respond to GET requests to /store/:productId with a single
// product based on the product's id using this JSON format: { "product": product }
router.get("/:productId", function (req, res, next) {
    console.log('hi')
    try {
        const { productId } = req.params;
        console.log(productId);

        const product = storeModel.fetchProductById(productId);
        res.status(200).send({ "product": product })
    }
    catch (err) {
        console.log(err);
        next(err)
    }

})

// It should allow POST requests to the /store endpoint:
router.post("/products", async function (req, res, next) {
    // next parameter???
    try {
        const shoppingCart = req.body.shoppingCart;
        const user = req.body.user;
        const purchase = storeModel.purchaseProducts(shoppingCart, user)
        res.status(201).send({ "purchase": purchase });
    } catch (err) {
        next(err);
    }
});


module.exports = router;

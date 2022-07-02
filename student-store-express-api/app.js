const express = require("express");
const morgan = require("morgan");
const app = express();
const storeRoute = require("./routes/store");
const storeModel = require("./models/store");
// Condense compiler info
app.use(morgan("tiny"));
app.use(express.json());
// Wire up the appropriate middleware and error handlers in the app.js file
// Create a single GET request handler at the / endpoint. It should respond to all GET requests with a JSON object and a 200 status code. The JSON response should contain a single key of ping that stores the string value: pong. For example: { "ping": "pong" }.
// Have a server.js file that starts the app by listening on port 3001.
console.log('test1')
app.use("/store", storeRoute);
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
// app.get('/store/:productId', (req, res) => {
//   const product = storeModel.fetchProductById(req.products);
//   res.status(200).send({"product": product})
// })

module.exports = app;

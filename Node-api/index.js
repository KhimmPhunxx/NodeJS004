// first NodeJS API
const express = require('express'); // import express
const app = express(); // extend
const cors = require("cors") // import cors

// allow origin (npm install cors)
app.use(cors({
  origin : "*"
}))
app.use(express.json()); // for parsing application/json
app.get("/",(req,res)=>{res.send("Hello PREYCODEBACKEND API");})

const category = require("./src/route/category.route");
const employee = require("./src/route/employee.route");
const customer = require("./src/route/customer.route");
const wishlist = require("./src/route/wishlist.route");
const payment_method = require("./src/route/payment_method.route");
const order_status = require("./src/route/order_status.route");
const product = require("./src/route/product.route");
const cart = require("./src/route/cart.route");
const order = require("./src/route/order.route");

category(app, "/api/category"); // call function
employee(app, "/api/employee"); // call function
customer(app, "/api/customer"); // call function
wishlist(app, "/api/wishlist"); // call function
payment_method(app, "/api/payment_method"); // call function
order_status(app, "/api/order_status"); // call function
product(app ,"/api/product"); // call function
cart(app ,"/api/cart"); // call function
order(app ,"/api/order"); // call function

app.listen(8081, () => {
  console.log('http localhost:8081');
});

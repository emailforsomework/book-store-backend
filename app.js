const express = require("express")
const app = express();
const cors = require("cors");
require("dotenv").config();
require('./connection/conn');
const User = require('./routes/user.js')
const Books = require("./routes/book.js")
const Favourite = require("./routes/favourite.js")
const Cart = require("./routes/cart.js")
const Order = require("./routes/order.js")
app.use(cors());

app.use(express.json()); // Middleware to parse JSON ... reason why got Internal server error in localhost:1000/api/v1/sign-up(POST)

// routes
app.use("/api/v1",User)
app.use("/api/v1",Books)
app.use("/api/v1",Favourite)
app.use("/api/v1",Cart);
app.use("/api/v1",Order);

// creating port
app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
});
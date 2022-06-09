const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/errors");

// seting up config

dotenv.config({ path: "config/.env" });

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

//Import routers
const productRouter = require("./routes/productRoute");
const authRouter = require("./routes/authRoute");
const payment = require("./routes/paymentRoute");
const orderRouter = require("./routes/orderRoute");
const contact = require("./routes/contact");
const postsRouter = require("./routes/postsRoute");

app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", payment);
app.use("/api", orderRouter);
app.use("/api", contact);
app.use("/posts", postsRouter);

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require('./server/database/connection');


const app = express();
dotenv.config({path:"config.env"});
const PORT = process.env.PORT;

connectDB()

app.set("view engine", "ejs");

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({ extended : true}))

app.use('/', express.static(path.resolve(__dirname, "assets/css")))
app.use('/', express.static(path.resolve(__dirname, "assets/js")))
app.use('/', require('./server/routes/router'))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))



app.listen(PORT);
console.log(PORT);
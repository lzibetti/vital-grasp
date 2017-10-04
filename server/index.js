const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const resourcesRoute = require("./routes/resources");
const contactsRoute = require("./routes/contacts");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/resources", resourcesRoute);
app.use("/contacts", contactsRoute);

mongoose.connect("mongodb://localhost/therapy", () => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
})

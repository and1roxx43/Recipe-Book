const express = require("express");
require("dotenv").config();
const db = require("./config/connection");

const app = express();

db.once("open", () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
        // console.log(`Use GraphQL at http://localhost:${process.env.PORT}${server.graphqlpath}`);
    });
});
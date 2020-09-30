const express = require("express");
const bodyParser = require("body-parser")
const request = require("request")
const app = express.use();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000");
})

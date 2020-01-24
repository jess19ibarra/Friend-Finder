var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express("");

// Sets initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
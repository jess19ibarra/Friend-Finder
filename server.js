var express = require("express");
var path = require("path");
var app = express("body-parer");

// Sets initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
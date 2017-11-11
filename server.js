// npm package dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express port configuration
var app = express(); // alert node that an express server is being created
var PORT = process.env.PORT || 3308; //sets a port or allows it to pick an available one

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// BodyParser gives the app the ability to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// routing to various files
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// get the server listening
app.listen(PORT, function () {
  console.log("YAY, it works... app listening on PORT: " + PORT);
});

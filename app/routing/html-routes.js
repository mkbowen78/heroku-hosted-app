//Dependencies
var path = require("path");

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/survey-res", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey-res.html"));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};

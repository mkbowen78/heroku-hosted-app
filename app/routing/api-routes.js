//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var friendsList = require("../data/friends.js");

module.exports = function(app) {
  // displays JSON of all the friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    // console.log(userScores);

    // not exactly sure how this works, but it's calculating which of the people in the databse are great matches
    var totalDiff = 0;

    for (var i = 0; i < friendsList.length; i++) {
      totalDiff = 0;

      for (var j = 0; j < friendsList[i].scores[i]; j++) {
        totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));

        // set best match
        if (totalDiff <= bestMatch.friendDiff) {
          bestMatch.name = friendsList[i].name;
          bestMatch.photo = friendList[i].photo;
          bestMatch.friendDiff = totalDiff;
        }
      }
    }

    // save users input to database - done after so that user isn't picked as match first
    friendsList.push(userData);

    // return JSON with the best match to app
    res.json(bestMatch);
});
};

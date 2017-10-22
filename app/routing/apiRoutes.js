const express = require("express");
const apiRoutes = express.Router();

// Display JSON of all possible friends
apiRoutes.get('/api/friends', function(req, res){
	res.send("GET /api/friends");
});

// Handles incoming survey results and handle compatibility logic
apiRoutes.post('/api/friends', function(req, res){
	res.send("POST /api/friends");
});

module.exports = apiRoutes;
// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "view.html"));
//   });
  
//   app.get("/add", function(req, res) {
// 	res.sendFile(path.join(__dirname, "add.html"));
//   });
  
//   // Get all characters
//   app.get("/all", function(req, res) {
// 	res.json(characters);
//   });
  
//   // Search for Specific Character (or all characters) - provides JSON
//   app.get("/api/:characters?", function(req, res) {
// 	var chosen = req.params.characters;
  
// 	if (chosen) {
// 	  console.log(chosen);
  
// 	  for (var i = 0; i < characters.length; i++) {
// 		if (chosen === characters[i].routeName) {
// 		  return res.json(characters[i]);
// 		}
// 	  }
// 	  return res.json(false);
// 	}
// 	return res.json(characters);
//   });
  
//   // Create New Characters - takes in JSON input
//   app.post("/api/new", function(req, res) {
// 	// req.body hosts is equal to the JSON post sent from the user
// 	// This works because of our body-parser middleware
// 	var newcharacter = req.body;
// 	newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
// 	console.log(newcharacter);
  
// 	characters.push(newcharacter);
  
// 	res.json(newcharacter);
//   });
  
//   // Starts the server to begin listening
//   // =============================================================
//   app.listen(PORT, function() {
// 	console.log("App listening on PORT " + PORT);
//   });
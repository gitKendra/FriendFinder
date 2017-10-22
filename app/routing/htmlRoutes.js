const express = require("express");
const htmlRoutes = express.Router();

// Basic route that sends the user first to the AJAX Page
htmlRoutes.get("/", function(req, res) {
	res.send("html GET /");
	//	res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

htmlRoutes.get('/survey', function(req, res){
	res.send("html GET /survey");
	// res.sendFile(path.join(__dirname, "/app/public/survey.html"));	
});


// TO-DO : a default, catch-all route that leads to home.html which displays the homepage


module.exports = htmlRoutes;
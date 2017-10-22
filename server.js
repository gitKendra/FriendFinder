// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
// const apiRoutes = require('./apiRoutes');
// const htmlRoutes = require('./htmlRoutes');
const routes = require('./app/routing');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect all routes to application
app.use('/', routes);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use('/app/routing/apiRoutes', apiRoutes);
// app.use('/app/routing/htmlRoutes', htmlRoutes);

// // Routes
// app.get("/", function(req, res) {
// 	console.log("GET /");
// 	res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get('/survey', function(req, res){
//     console.log("GET /survey");
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
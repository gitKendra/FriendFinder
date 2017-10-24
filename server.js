// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow files in public folder to be served static
app.use(express.static(__dirname + '/app/public'));

// Routers
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

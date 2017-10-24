var express = require('express');
var router = express.Router();
var friends = require('../data/friends.js');

router.get('/api/friends', function(req, res) {
	res.json(friends);
});

// Returns a JSON of the matched friend and adds the user to existing database
router.post('/api/friends', function(req, res){
	var user = req.body;
	var matchIndex = 0;
	var matchDifference = 0;

	// i tracks the index of the friend from the array. j tracks the index from score array
	for (var i = 0; i < friends.length; i++){
		// Reset total difference at start of each friend comparison 
		var totalDifference = 0;

		// Calculate total difference beween user and friend
		 for(var j = 0; j < 10; j ++){
			totalDifference += Math.abs(friends[i].scores[j] - user.scores[j]);
		}
		// Compare current friend with current match and update variables
		if(totalDifference < matchDifference){
			matchDifference = totalDifference;
			matchIndex = i;
		}
		else if(i == 0){
			matchIndex = i;
			matchDifference = totalDifference;
		}
	}

	// Add the new friend to exising friend
	friends.push(user);

	// Respond with the matched friend
	res.json(friends[matchIndex]);
});

module.exports = router;
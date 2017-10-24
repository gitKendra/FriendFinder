var express = require('express');
var router = express.Router();
var friends = require('../data/friends.js');

router.get('/api/friends', function(req, res) {
	res.json(friends);
});


// Returns a JSON of the friend
router.post('/api/friends', function(req, res){
	var user = req.body;
	var matchIndex = 0;
	var matchDifference = 0;

	// i tracks the index of the friend from the array. j tracks the score
	for (var i = 0; i < friends.length; i++){
		// Reset total difference for each friend comparison 
		var totalDifference = 0;

		// Calculate total difference beween user and friend
		 for(var j = 0; j < 10; j ++){
			totalDifference += Math.abs(friends[i].scores[j] - user.scores[j]);
		}
		// Compare and update match variables
		if(totalDifference < matchDifference){
			matchDifference = totalDifference;
			matchIndex = i;
		}
		else if(i == 0){
			matchIndex = i;
			matchDifference = totalDifference;
		}
	}

	// add the new friend to exising friend
	friends.push(user);

	// respond with the matched friend to the caller
	res.json(friends[matchIndex]);
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile('FriendFinder/app/public/home.html', {'root': '../'});
});

router.get('/survey', function(req, res){
	res.sendFile('FriendFinder/app/public/survey.html', {'root': '../'});
});

// Catch all route
router.get('/:home', function(req, res) {
	res.sendFile('FriendFinder/app/public/home.html', {'root': '../'});
});
module.exports = router;
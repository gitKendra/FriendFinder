
var friend = [
	{
		"name":"Ahmed",
		"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
		"scores":["5","1","4","4","5","1","2","5","4","1"]
	},{
		"name":"Jacob Deming",
		"photo":"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
		"scores":["4","2","5","1","3","2","2","1","3","2"]
	},{
		"name":"Jeremiah Scanlon",
		"photo":"https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
		"scores":["5","2","2","2","4","1","3","2","5","5"]
	},{
		"name":"Louis T. Delia",
		"photo":"https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
		"scores":["3","3","4","2","2","1","3","2","2","3"]
	},{
		"name":"Lou Ritter",
		"photo":"https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
		"scores":["4","3","4","1","5","2","5","3","1","4"]
	},{
		"name":"Jordan Biason",
		"photo":"https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
		"scores":["4","4","2","3","2","2","3","2","4","5"]
	}];

function addFriend(name, photo, scores){
	var newFriend = {
		"name": name,
		"photo": photo,
		"scores": scores //array of each answer score
	}
	friend.push(newFriend);
}
var matchIndex = 0;
var matchDifference = 0;
var user =  {
	"name": "Kendra Krzywicki",
	"photo": "https://drive.google.com/open?id=14BTtkQIvHO1jcOr7ELPAWcZpfkWaeTEEDg",
	"scores": [2, 2, 3, 4, 1, 4, 3, 5, 4, 2]
   }
function findMatch(){
   // i tracks the index of the friend from the array. j tracks the score
 for (var i = 0; i < friend.length; i++){
	// Reset total difference for each friend comparison 
	totalDifference = 0;

	// Calculate total difference beween user and friend
	 for(var j = 0; j < 10; j ++){
		totalDifference += Math.abs(friend[i].scores[j] - user.scores[j]);
	}
console.log("totaldiff " +totalDifference);
console.log("matchdif " + matchDifference);
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
 console.log("match index: " + matchIndex);
}

findMatch(friend, user);

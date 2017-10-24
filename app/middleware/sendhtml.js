
module.exports = function addSendHtml(req, res, next){
	res.sendHtml = function(filepath){
		return res.sendFile(filepath, {root:'../'});
	};
	next(req, res);
};

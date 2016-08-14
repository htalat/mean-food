var fs = require('fs');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/api/lol',function(req,res){
		console.log('lololol')
		return res.send(200);
	});
	app.post('/api/restaurant',function(req,res){
		console.log('req',req.body);
		var data = JSON.stringify(req.body);
		console.log(data);
		fs.writeFile("./tmp/test.txt", data,'utf8' ,function(err) {
	    if(err) {
	        return console.log(err);
	    }
    	console.log("The file was saved!");
		});
		return res.send(200);
	})

};

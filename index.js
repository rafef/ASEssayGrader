var counter = 0;
var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var functions = require('./functions.js');
var amstudsWords = functions.amstudsWords;
app.use(bodyParser.urlencoded());
app.engine('html', mustacheExpress());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.get("/", function(request, response) {
		response.render("index.html");
});
app.post("/sign", function(request, response) {
	text = request.body.score;
	text = functions.prepper(text);
	var match = functions.wordCompare(text, amstudsWords, counter);
  if (request.body.name && request.body.score) {
			response.render("success.html", {score: match, name: request.body.name, outof: text.length});
	} else {
		response.render("failure.html");
	}
});
app.listen(8080, console.log("Now listening on 8080"));

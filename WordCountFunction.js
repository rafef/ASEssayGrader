app.post("/WordCount", function(request, response) {
	var text = request.body.essay;
	var number_of_words = 0;
	theNewWords = [];
	var split_text = text.split(" ");
	print("split_text");
	for (var i = 0; i < split_text.length; i++) {
		var placeholder = split_text(i);
			if (placeholder[placeholder.length] == "." || "," || "!" || "(" || ")" || ":" || ";"){
				placeholder = placeholder.slice(0,-1)
				theWords.push(placeholder)
			}
		}
response.end(number_of_words, theNewWords);

var text = "I went, to the. Store and I got. A Jog ten. Dah. William Du TomTom Fest! Cause."
var number_of_words = 0;
var theWords = [];
var theNewWords = [];
var split_text = [];
split_text = text.split(" ");
console.log(split_text);
for (var i = 0; i < split_text.length; i++) {
  var placeholder = split_text[i];
  console.log(placeholder[placeholder.length - 1])
    if (placeholder[placeholder.length - 1] == "." || placeholder[placeholder.length - 1] == "," || placeholder[placeholder.length - 1] == "!" || placeholder[placeholder.length - 1] == "(" || placeholder[placeholder.length - 1] == ")" || placeholder[placeholder.length - 1] == ":" || placeholder[placeholder.length - 1] == ";"){
      placeholder = placeholder.slice(0,-1);
      theWords.push(placeholder);

    }
    else{
          theWords.push(placeholder);
      }

}
console.log(theWords);

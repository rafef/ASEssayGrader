var one = ["Test", "Ok", "hello", "stuff", "other", "stuff", "stuff"];
var two = ["Test", "Ok", "hello", "stuff", "lol"];
var counter = 0;
grade = 0;
function wordCompare(essayWords, amstWords){
  for (var i = 0; i < essayWords.length; i++){
    for (var z = 0; z < amstWords.length; z++){
      if (essayWords[i] == amstWords[z]){
        counter = counter + 1;
      }
    }
  }
  return(counter);
}
wordCompare(one,two);

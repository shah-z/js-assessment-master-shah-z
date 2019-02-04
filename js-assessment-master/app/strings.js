stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
	var reducedString =[];
  var chars = str.split('');
  for(var i=0;i<chars.length;i++){
  var count =reducedString.filter(x => x == chars[i]).length;
  
  
  if(count <amount){reducedString.push(chars[i]);}
  }
  //build string
  var reducedStringResult="";
  for(var i=0;i<reducedString.length;i++){
  reducedStringResult = reducedStringResult + reducedString[i];
  
  }
  return reducedStringResult;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
var chars = str.split('');
var reverse ="";
for(var i = chars.length-1;i>=0;i--){
reverse = reverse + chars[i];
}
return reverse;
  },
};

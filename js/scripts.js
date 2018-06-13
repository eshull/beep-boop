// function to count out all numbers up to input
var countedNumbers = function(number) {
  console.log(number + "function reached");
  var array = [];
  for (var i = 0; i <= number; i++) {
    array.push(i);
    if (i % 3 === 0 && i !== 0){
      array[i] = ' "I am sorry, Dave. I am afraid I cannot do that." ';
    } else {
        var string = [];
        // returns 0 true or 1 false
        string = numberToString(i);
        if (string === false) {
              array[i] = " beep";
        } else if (string === true) {
              array[i] = " boop";
        }
    }
}
return array;
}

var numberToString = function(number) {
  var newString = number.toString().split("");
  if (newString.includes("0")) {
    return true;
} else if (newString.includes("1")) {
  return false;
}
}

// function to turn numbers into a string in an array
var numbersByDigits = function(integer) {

  var number = integer.toString();
  var stringNumber = number.split("");
  var output = [];

  for (var i = 0; i < stringNumber.length; i ++) {
      output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        return output;
  }
}

$(document).ready(function() {
  $("#theForm").submit(function(event) {
    event.preventDefault();
    var milesToTravel = parseInt($("#userMiles").val());
    console.log(milesToTravel);
    var numberArray = [];
    numberArray = countedNumbers(milesToTravel);
    var finalArray = [];

    console.log(numberArray);
    $(".results").text(numberArray);
    $(".showResults").show();
    $(".results").show();
  });
});

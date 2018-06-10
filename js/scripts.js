// function to count out all numbers up to input
var countedNumbers = function(number) {
  var i = 0;
  var array = [];
  while (i < number) {
    i++;
    array.push(i);
  }
  return array;
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
    var numberArray = [];
    var numberArray = countedNumbers(milesToTravel);
    var finalArray = [];

    for (i = 1; i <= numberArray.length; i++) {
      if (((numberArray[i] - 1) % 3) === 0) {
        var replace = [' "I am sorry, Dave. I am afraid I cannot do that." '];
        numberArray[i] = replace
        finalArray.push(replace)
        numberArray[i] === numberArray.length;
      } else {
        var isItAOne = numbersByDigits(i);
            for (var k = 0; k < isItAOne.length; k++) {
              if (undefined) {
                isItAOne[k] = " "
                isItAOne[i] === numberArray.length;
              } else if (isItAOne[k] === "1") {
                var boop = ["boop"];
                isItAOne[k] = boop
                finalArray.push(boop);
                isItAOne[i] === numberArray.length;
              } else if (isItAOne[k] === "0") {
                var beep = ["beep"];
                isItAOne[k] = beep;
                finalArray.push(beep);
                isItAOne[i] === numberArray.length;
              } else {
                 var numValue = [i];
                 finalArray.push(numValue);
                isItAOne[i] === numberArray.length;
              }
              break;
            }
          }
        }
    var finalQuote = finalArray.join(" ");
    $(".results").text(finalQuote);
    $(".showResults").show();
    $(".results").show();
  });
});

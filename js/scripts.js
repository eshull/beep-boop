
// function to count out all numbers up to input
var countedNumbers = function(number) {
  var i = 0;
  var array = [];
  while (i < number) {
    i++;
    array.push(i)
  }
countedNumbers = array;
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

    // $(".showResults").show();
    // $(".results").hide();


    var milesToTravel = parseInt($("#userMiles").val());
    countedNumbers(milesToTravel);
    var finalArray = [];
    for (i = 1; i <= countedNumbers.length; i++) {

      if (((countedNumbers[i] - 1) % 3) === 0) {
        var replace = [' "I am sorry, Dave. I am afraid I cannot do that." '];
        countedNumbers[i] = replace
        console.log("divisible by 3" + replace)
        finalArray.push(replace)
        countedNumbers[i] === countedNumbers.length;

      } else {
        console.log("here");
        var isItAOne = numbersByDigits(i);
            for (var k = 0; k < isItAOne.length; k++) {
              // finalArray.pop(isItAOne);
              if (undefined) {
                isItAOne[k] = "#"
                isItAOne[i] === countedNumbers.length;
              } else if (isItAOne[k] === "1") {
                // console.log("boop");
                var boop = ["boop"];
                isItAOne[k] = boop
                finalArray.push(boop);
                isItAOne[i] === countedNumbers.length;
              } else if (isItAOne[k] === "0") {
                // console.log("beep");
                var beep = ["beep"];
                isItAOne[k] = beep;
                finalArray.push(beep);
                isItAOne[i] === countedNumbers.length;
              } else {
                 var numValue = [i];
                 // isItAOne[k] = numValue
                 finalArray.push(numValue);
                 // isItAOne[k] = ([k] + 1)
                isItAOne[i] === countedNumbers.length;
              }
              break;
            }
          }
      }
      console.log(finalArray);
      var finalQuote = finalArray.join(" ");
      // alert(finalQuote);
      // $(".showResults").addClass();


      // $(".showResults").show();
      // $(".results").show();


      // $(".showResults").toggle();

  });

});

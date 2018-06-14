var countedNumbers = function(number) {
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
// function to convert number to string and return true or false if 1 or 0
var numberToString = function(number) {
    var newString = number.toString().split("");
    if (newString.includes("0")) {
      return true;
  } else if (newString.includes("1")) {
    return false;
  }
}


$(document).ready(function() {
  $("#theForm").submit(function(event) {
    event.preventDefault();
    var milesToTravel = parseInt($("#userMiles").val());
    var numberArray = [];
    numberArray = countedNumbers(milesToTravel);

    $(".results").text(numberArray);
    $(".showResults").show();
    $(".results").show();
  });
});

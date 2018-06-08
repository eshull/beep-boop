var countedNumbers = function(number) {
  var i = 0;
  var array = [];
  while (i < number) {
    i++;
    console.log(i);
    array.push(i)
  }
countedNumbers = array;
}

var numbersByDigits = function(integer) {

  var number = toString(integer);
  var output = [];
  var stringNumber = number.split("");
  var i = number;
  for (i = 0; i < stringNumber.length; i ++) {
      // output.pop((i));
      // output.pop((i));
      output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        output.push(stringNumber.pop());

      // output.push(+stringNumber.charAt(i));
      // output.push(+stringNumber.charAt(i));
      // console.log(output);
      console.log(output);
      return output;

  }

}
// var numbersByDigits = function(integer) {
//   var quoteArray = integer.split("");
// }
// function zeroOrOne(a, b) {
//   var zero = a
//   var one = b
//   if (zero === 0) {
//     return 'it has a zero';
//   } else if (one === 1) {
//     return 'it has a one';
//   } else {
//     return 'Does NOT fit!';
//   }
//
// }


$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());

    countedNumbers(milesToTravel);
    // alert(countedNumbers);

    for (var i = 0; i < countedNumbers.length; i++) {
      if ((countedNumbers[i] % 3) === 0) {
        console.log("divisible by 3")
      } else if (i <= countedNumbers.length) {

          numbersByDigits(i);
            console.log(numbersByDigits(i));
          // "convert number to array to compare each digit"
          // if (number has 1) {
          //   "output Boop"
          // } else if (number has 0) {
          //   "output beep"
          // }
      } else {
        console.log("display nothing for this number");
      }
    }


  });

});

var digits = [];
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

  var number = integer.toString();
  console.log(number);
  var stringNumber = number.split("");
  var output = [];

  for (var i = 0; i < stringNumber.length; i ++) {
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
        return output;
        // numbersByDigits.push(output);
      // output.push(+stringNumber.charAt(i));
      // output.push(+stringNumber.charAt(i));
      // console.log(output);
      // console.log(output);
      // return output;

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



    for (i = 0; i < countedNumbers.length; i++) {
      if (i === 0) { console.log("it continued"); i = (i+1);}
      if (((countedNumbers[i] - 1) % 3) === 0) {
        var replace = ["I'm sorry, Dave. I'm afraid I can't do that."];
        countedNumbers[i] = replace
        console.log("divisible by 3" + replace)

      } else {
        var isItAOne = numbersByDigits(i);
        console.log(isItAOne);
        for (var i = 0; i < isItAOne.length; i++) {
          if (isItAOne === "1") {
            console.log("you are a winner");
            [i] = isItAOne.length 
          }
        }



          // console.log("second loop" + i);
          //   console.log(numbersByDigits(i));

          // "convert number to array to compare each digit"
          // if (number has 1) {
          //   "output Boop"
          // } else if (number has 0) {
          //   "output beep"
          // }
      }
    }
return replace;

  });

});

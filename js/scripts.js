
var countedNumbers = function(number) {
  var i = 0;
  var array = [];
  while (i < number) {
    i++;
    // console.log(i);
    array.push(i)
  }
countedNumbers = array;
}

var numbersByDigits = function(integer) {

  var number = integer.toString();
  // console.log(number);
  var stringNumber = number.split("");
  var output = [];

  for (var i = 0; i < stringNumber.length; i ++) {
      // output.pop((i));
      // output.pop((i));
      output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
        // output.push(stringNumber.pop());
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
    alert(countedNumbers);




    for (i = 0; i < countedNumbers.length; i++) {
      // if (i === 0) { console.log("it continued"); i = (i+1);}
      if (((countedNumbers[i] - 1) % 3) === 0) {
        var replace = ["I'm sorry, Dave. I'm afraid I can't do that."];
        countedNumbers[i] = replace
        console.log("divisible by 3" + replace)
        // debugger;

      } else if (countedNumbers[i] > 1) {
        console.log("are we there");
          var isItAOne = numbersByDigits(i);
          console.log(isItAOne);



            for (var i = 0; i < isItAOne.length; i++) {

              if (isItAOne[i] === "1") {
                console.log("boop");
                var boop = ["boop"];
                isItAOne[i] = boop
                // return boop;
                isItAOne[i] === countedNumbers.length;
                // break;
              } else if (isItAOne[i] === "0") {
                console.log("beep");
                var beep = ["beep"];
                isItAOne[i] = beep
                // return beep;
                isItAOne[i] === countedNumbers.length;
                // break;
              } else if (undefined){
                console.log("loser");
                isItAOne[i] === countedNumbers.length;
              // return ("");

               }
               // countedNumbers[i] = countedNumbers.length;
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
    //   }
    // }
    // debugger;
// return (replace + beep + boop);
countedNumbers[i] === countedNumbers.length;
}
  });

});

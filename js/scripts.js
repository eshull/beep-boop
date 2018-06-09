//
// var countedNumbers = function(number) {
//   var i = 0;
//   var array = [];
//   while (i < number) {
//     i++;
//     // c

// onsole.log(i);
//     array.push(i)
//   }
// countedNumbers = array;
// }
//
// var numbersByDigits = function(integer) {
//
//   var number = integer.toString();
//   // console.log(number);
//   var stringNumber = number.split("");
//   var output = [];
//
//   for (var i = 0; i < stringNumber.length; i ++) {
//       // output.pop((i));
//       // output.pop((i));
//       output.push(stringNumber.pop());
//         output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         // output.push(stringNumber.pop());
//         return output;
//         // numbersByDigits.push(output);
//       // output.push(+stringNumber.charAt(i));
//       // output.push(+stringNumber.charAt(i));
//       // console.log(output);
//       // console.log(output);
//       // return output;
//
//   }
// }
//
// // var numbersByDigits = function(integer) {
// //   var quoteArray = integer.split("");
// // }
// // function zeroOrOne(a, b) {
// //   var zero = a
// //   var one = b
// //   if (zero === 0) {
// //     return 'it has a zero';
// //   } else if (one === 1) {
// //     return 'it has a one';
// //   } else {
// //     return 'Does NOT fit!';
// //   }
// //
// // }
//
//
// $(document).ready(function() {
//
//   $("#theForm").submit(function(event) {
//     event.preventDefault();
//
//     var milesToTravel = parseInt($("#userMiles").val());
//
//     // countedNumbers(milesToTravel);
//     alert(countedNumbers);
//
//
//
//
//     for (i = 0; i < countedNumbers.length; i++) {
//       // if (i === 0) { console.log("it continued"); i = (i+1);}
//       if (((countedNumbers[i] - 1) % 3) === 0) {
//         var replace = ["I'm sorry, Dave. I'm afraid I can't do that."];
//         countedNumbers[i] = replace
//         console.log("divisible by 3" + replace)
//         // debugger;
//
//       } else {
//         console.log("else statement");
//         countedNumbers(milesToTravel);
//           var isItAOne = numbersByDigits(i);
//           console.log(isItAOne);
//           // console.log(isItAOne);
//             for (var i = 0; i < isItAOne.length; i++) {
//
//
//               if (isItAOne[i] === "1") {
//                 console.log("boop");
//                 var boop = ["boop"];
//                 isItAOne[i] = boop
//                 // return boop;
//                 isItAOne[i] === countedNumbers.length;
//                 // break;
//               } else if (isItAOne[i] === "0") {
//                 console.log("beep");
//                 var beep = ["beep"];
//                 isItAOne[i] = beep
//                 // return beep;
//                 isItAOne[i] === countedNumbers.length;
//                 // break;
//               } else if (isItAOne[i] <= countedNumbers.length){
//                 console.log("loser");
//                 var empty = ("")
//                 isItAOne[i] = empty;
//                 isItAOne[i] === countedNumbers.length;
//               // return (empty);
//               // debugger;
//                }
//                else {
//                 countedNumbers[i] === countedNumbers.length;
//                }
//                // countedNumbers[i] = countedNumbers.length;
//             }
// countedNumbers[i] === countedNumbers.length;
//   console.log(boop + beep + empty);
//
//         }
//   return (boop + beep + empty)
//         // return (boop + beep + empty)
//       }
//   });
// });

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
      output.push(stringNumber.pop());
        output.push(stringNumber.pop());
        return output;
  }
}

$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());

    countedNumbers(milesToTravel);
    alert(countedNumbers);




    for (i = 0; i < countedNumbers.length; i++) {

      console.log(isItAOne);

      if (((countedNumbers[i] - 1) % 3) === 0) {
        var replace = ["I'm sorry, Dave. I'm afraid I can't do that."];
        countedNumbers[i] = replace
        console.log("divisible by 3" + replace)



      } else {

        var isItAOne = numbersByDigits(i);
            for (var k = 0; k < isItAOne.length; k++) {


              if (isItAOne[k] === "1") {
                // console.log("boop");
                // var boop = ["boop"];
                isItAOne[k] = "boop"
                isItAOne[k] === countedNumbers.length;
              } else if (isItAOne[k] === "0") {
                // console.log("beep");
                // var beep = ["beep"];
                isItAOne[k] = "beep";
                isItAOne[k] === countedNumbers.length;
              } else if (undefined){
                // console.log("loser");
                // var empty = ("#")
                isItAOne[k] = "#"
                isItAOne[k] === countedNumbers.length;
               }
               else {
                 isItAOne[k] = "M"
                countedNumbers[k] === countedNumbers.length;
               }
            }
          }

      countedNumbers[i] === countedNumbers.length;
      }

  });

});

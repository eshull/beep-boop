var countedNumbers = function(number) {
  var i = 0;
  var x = 0;
  while (i =< number) {
    // Runs 5 times, with values of step 0 through 4.
    i++;
    x += i;
    console.log(i);
  }
}


// var countedNumbers;
// for (number = 0; number < 10; number++) {
//   // Runs 5 times, with values of step 0 through 4.
//   countedNumbers.push(number);
//   console.log(number);
// }
// console.log(countedNumbers);
//
//
// var numberCount = function(input) {
//   for (var i = 0; i < input.length; i++) {
//     console.log([i]);
//     var numberArray = [i];
//     // var numberArray = push(argument)
//   }
//   return numberArray;
//
// }




$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());

      console.log(countedNumbers(milesToTravel));
    // var milesArray = function(miles) {
    //   for (var i=0; i<=miles; i++) {
    //     if ([i] === 1) {
    //       console.log("first");
    //     }
    //     else if ([i] === 2) {
    //       console.log("second");
    //     }

  });

    });




    //
    // var milesArray = function(miles) {
    //   for (var i = 0; i < miles; i++) {
    //     var poppedMiles = miles.push();
    //     console.log(miles + "for loop");
    //     if (milesToTravel[i] >= 0) {
    //
    //
    //                 console.log(poppedMiles);
    //       return poppedMiles;
    //     }
    //   }
    // };

    // var milesArray = function(miles) {
    //     var poppedMiles = miles.splice();
    //     return poppedMiles;
    // };
    // console.log(poppedMiles);

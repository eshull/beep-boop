
var numberCount = function(input) {
  for (var i = 0; i < input.length; i++) {
    console.log([i]);
    var numberArray = [i];
    // var numberArray = push(argument)
  }
  return numberArray;

}




$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());
      console.log(numberCount(milesToTravel));
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

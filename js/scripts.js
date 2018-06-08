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



$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());

    countedNumbers(milesToTravel);
    alert(countedNumbers);


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

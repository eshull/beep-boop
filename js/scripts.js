





$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());

    var milesArray = function(miles) {
      for (var i = 0; i < milesToTravel.length; i++) {
        if (milesToTravel[i] >= 0) {
          var poppedMiles = milesToTravel.slice();
          return poppedMiles;
        }
      }
    };

    // var milesArray = function(miles) {
    //     var poppedMiles = miles.splice();
    //     return poppedMiles;
    // };
    // console.log(poppedMiles);
    console.log(milesArray(milesToTravel));

  });




});


// 
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }


$(document).ready(function() {

  $("#theForm").submit(function(event) {
    event.preventDefault();

    var milesToTravel = parseInt($("#userMiles").val());
    console.log(milesToTravel);

  });




});

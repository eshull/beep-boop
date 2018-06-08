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

    for (var i = 0; i < countedNumbers.length; i++) {
      if ((countedNumbers[i] % 3) === 0) {
        console.log("divisible by 3");
      } else {
        console.log("not working");
      }
    }


  });

});

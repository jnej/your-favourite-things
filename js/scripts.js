$(document).ready(function() {
  $("#formOne").submit(function(event) {
    //gather each of these form input values and places them into one array.//
    var colour1 = $("#colour1").val();
    var colour2 = $("#colour2").val();
    var colour3 = $("#colour3").val();
    var favColours = [colour1,colour2,colour3];

    //Use square bracket notation to access the second, first, and third elements of the original array of favorite things.//
      alert("your second favourite colour is: " + favColours[1]);
      alert("your first favourite colour is: " + favColours[0]);
      alert("your third favourite colour is: " + favColours[2]);


//Finally, display the array in your page's HTML as list items in a <ul> tag.//
    $("#result").append(function() {
      return "<li>" + favColours + "</li>";
    })


    event.preventDefault();
  });
});

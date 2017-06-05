$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var colour1 = $("#colour1").val();
    var colour2 = $("#colour2").val();
    var colour3 = $("#colour3").val();
    var favColours = [colour1,colour2,colour3];

    $(".colour1").text(colour1);
    $(".colour2").text(colour2);
    $(".colour3").text(colour3);

      alert(favColours);

    event.preventDefault();
  })
})

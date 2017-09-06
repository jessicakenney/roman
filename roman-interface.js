$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#decNum").val();
    var output = toRoman(input);
    $("#result").text(output);
  });
});

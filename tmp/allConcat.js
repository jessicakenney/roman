var Roman = require('./../js/roman.js').romanModule;

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#decNum").val();
    var roman = new Roman("blue");
    var output = roman.toRoman(input);
    $("#result").text(output);
  });
});

var Roman = require('./../js/roman.js').romanModule;


$(document).ready(function(){
  $('#time').text(moment());
});

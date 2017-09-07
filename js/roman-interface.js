import { Roman } from './../js/roman.js';

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    let input = $("input#decNum").val();
    let roman = new Roman("red");
    let output = roman.toRoman(input);
    $("#result").text(output);
  });
});

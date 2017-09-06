(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Roman(color){
  this.color=color;

}
Roman.prototype.thouPlace=function(userInput){
  var output = "";
  if (userInput==="1") {
    output="M";
  }else if(userInput === "2"){
    output = "MM";
  }else if(userInput === "3"){
    output = "MMM";
  }else{
    output = "";
  }
  return output;
};

Roman.prototype.hunPlace=function(userInput){
  var output = "";
  if (userInput==="1") {
    output="C";
  }else if(userInput === "2"){
    output = "CC";
  }else if(userInput === "3"){
    output = "CCC";
  }else if(userInput === "4"){
    output = "CD";
  }else if(userInput === "5"){
    output = "D";
  }else if(userInput === "6"){
    output = "DC";
  }else if(userInput === "7"){
    output = "DCC";
  }else if(userInput === "8"){
    output = "DCCC";
  }else if(userInput === "9"){
    output = "CM";
  }else{
    output = "";
  }
  return output;
};

Roman.prototype.tenPlace=function(userInput){
  var output = "";
  if (userInput==="1") {
    output="X";
  }else if(userInput === "2"){
    output = "XX";
  }else if(userInput === "3"){
    output = "XXX";
  }else if(userInput === "4"){
    output = "XL";
  }else if(userInput === "5"){
    output = "L";
  }else if(userInput === "6"){
    output = "LX";
  }else if(userInput === "7"){
    output = "LXX";
  }else if(userInput === "8"){
    output = "LXXX";
  }else if(userInput === "9"){
    output = "XC";
  }else{
    output = "";
  }
  return output;
};

Roman.prototype.onePlace=function(userInput){
  var output = "";
  if (userInput==="1") {
    output="I";
  }else if(userInput === "2"){
    output = "II";
  }else if(userInput === "3"){
    output = "III";
  }else if(userInput === "4"){
    output = "IV";
  }else if(userInput === "5"){
    output = "V";
  }else if(userInput === "6"){
    output = "VI";
  }else if(userInput === "7"){
    output = "VII";
  }else if(userInput === "8"){
    output = "VIII";
  }else if(userInput === "9"){
    output = "IX";
  }else{
    output = "";
  }
  return output;
};
Roman.prototype.toRoman=function(userInput){
  var length = userInput.length;
  var output = "";
  if((userInput<= 0) || (userInput >= 4000) || isNaN(userInput)){
  return "Invalid number, try again";
  }

  if(length === 1){
  output = this.onePlace(userInput);
  }else if(length === 2){
  output = this.tenPlace(userInput[0]) + this.onePlace(userInput[1]);
  }else if(length === 3){
  output = this.hunPlace(userInput[0]) + this.tenPlace(userInput[1]) + this.onePlace(userInput[2]);
  }else if(length === 4){
  output = this.thouPlace(userInput[0]) + this.hunPlace(userInput[1]) + this.tenPlace(userInput[2]) + this.onePlace(userInput[3]);
  }else{
  output = "Invalid number, try again";
  }
  return output;
};


exports.romanModule = Roman;

},{}],2:[function(require,module,exports){
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

},{"./../js/roman.js":1}]},{},[2]);

const prompt= require('prompt-sync')();
var name=prompt("WHAT IS YOUR NAME :");
var hername=prompt("WHAT IS HIS/HER NAME :");
var love= Math.random() *100;
love=Math.floor(love)+1;

console.log (name  +" " + "and"+ " "+ hername +" "+"your love score is"+ " "+ love +"%");
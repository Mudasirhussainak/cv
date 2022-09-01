/*user name*/
/*     LOVE CALCULATER*/
var name=prompt("WHAT IS YOUR NAME :");
var hername=prompt("WHAT IS HIS/HER NAME :");
var love= Math.random() *100;
love=Math.floor(love)+1;

alert (name  +" " + "and"+ " "+ hername +" "+"your love score is"+ " "+ love +"%");
if(love>80){
    alert( name + "and " +hername+" " + " " +"your are bff's ");
}
if(love>50 && love <=80 ){
    alert( name + "and " +hername+" " + " " +"your are bestfriends");

}
else{
    alert( name + " and " +hername+" " + " " +"your are goodfriends ");

}
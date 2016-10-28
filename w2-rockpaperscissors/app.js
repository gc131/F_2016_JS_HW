console.log('yo js works');

var user=0;
var computer=0;
var myArray= ["Rock","Paper","Scissors"];

var greeting= confirm("Would you like to play Rock Paper Scissors?");

while (greeting== true){
	var playing = prompt("What is your play?");
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
if (playing=="Rock" && rand=="Paper"){
		alert("The computer chose" + rand);
        computer++;
} else if(playing=="Rock" && rand=="Scissors"){
        alert("The computer chose" + rand);
		user++;
        
} else if(playing==rand){
    alert("The computer chose" + rand);
    alert("There was a tie");
    
} else if(playing=="Paper" && rand=="Rock"){
	alert("The computer chose" + rand);	
    user++;
        
} else if(playing=="Paper" && rand=="Scissors"){
	alert("The computer chose" + rand);
    computer++
        
} else if(playing=="Scissors" && rand=="Paper"){
	alert("The computer chose" + rand);	
    user++
        
} else if(playing=="Scissors" && rand=="Rock"){
    alert("The computer chose" + rand);
    computer++
        
} alert ("Your score is" + user +"and the computer's score is"+computer);
  var greeting =confirm("Would you like to play again?");
} if (greeting===false){
	alert("Okay, have a nice day!");
	alert("User's score is"+ user +"and the computer's score is"+computer);
}
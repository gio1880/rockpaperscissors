// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var input = $("#input").val();
var choices = ["rock", "paper", "scissors"]

var randomIndex = Math.floor(Math.random() * choices.length); 
var randomElement = choices[randomIndex];

    $("#userChoice").text(input);
    $("#computerChoice").text(randomElement);
    if(input === randomElement){
        $("#result").text("Tied");        
    }
    else if(input==="paper" || randomElement==="rock"){
        $("#result").text("Computer Won")
    }
});

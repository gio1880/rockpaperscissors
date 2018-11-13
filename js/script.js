// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var choices = ["rock", "paper", "scissors"]

var randomIndex = Math.floor(Math.random() * choices.length); 
var randomElement = choices[randomIndex];

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var input = $("#input").val();
    // input values 
    $("#userChoice").text(input);
    $("#computerChoice").text(randomElement);
    // Tied Situation
    if(input === randomElement){
        $("#result").text("Tied");        
    }
    // paper and rock
    else if(input==="paper" && randomElement==="rock"){
        $("#result").text("Player Won")
    }
    else if(input==="rock" && randomElement==="paper"){
        $("#result").text("Computer Won")
    }
    // scissors and rock
    else if(input==="scissors" && randomElement==="rock"){
        $("#result").text("Computer Won")
    }
    else if(input==="rock" && randomElement==="scissors"){
        $("#result").text("Player Won")
    }
    // scissors and paper
    else if(input==="paper" && randomElement==="scissors"){
        $("#result").text("Computer Won")
    }
    else if(input==="scissors" && randomElement==="paper"){
        $("#result").text("Player Won")
    }
});

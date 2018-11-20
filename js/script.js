// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var choices = ["rock", "paper", "scissors"]
var playerChoice = "";

// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    gameLogic();
});
$("#rock").click(function(){
    playerChoice = "rock";
    gameLogic();
});
$("#paper").click(function(){
    playerChoice = "paper";
    gameLogic();
});
$("#scissors").click(function(){
    playerChoice = "scissors";
    gameLogic();
});
function resultAnimation (result){
    if(result === "won" ) {
        $("#result").css("background","gold");
        $("#result").css("padding-top","3%");
        $("#result").css("padding-bottom","3%");
        $("#result").animate({opacity: '0.4'}, "slow");
        $("#result").animate({opacity: '0.8'}, "slow");
    }
    else if(result === "Tied"){
        $("#result").css("background","red");
        $("#result").css("padding-top","3%");
        $("#result").css("padding-bottom","3%");
        $("#result").animate({opacity: '0.4'}, "slow");
        $("#result").animate({opacity: '0.8'}, "slow");
    }
}
function gameLogic() {
    //variables
    var randomIndex = Math.floor(Math.random() * choices.length); 
    var randomElement = choices[randomIndex];
    var input = $("#input").val();
    
    // input values 
    $("#userChoice").text(input);
    $("#userChoice").text(playerChoice);
    $("#computerChoice").text(randomElement);
    
    // Tied Situation
    if(input === randomElement || playerChoice === randomElement){
        $("#result").text("Tied");
        resultAnimation("Tied");
    }
    // paper and rock
    else if((input==="paper" || playerChoice === "parent") && randomElement==="rock" ){
        $("#result").text("Player Won !");
        resultAnimation("won");
    }
    else if((input==="rock" || playerChoice ==="rock") && randomElement==="paper"){
        $("#result").text("Computer Won !");
        resultAnimation("won");
    }
    // scissors and rock
    else if((input==="scissors" || playerChoice === "scissors") && randomElement==="rock"){
        $("#result").text("Computer Won !");
        resultAnimation("won");
    }
    else if((input==="rock" || playerChoice === "rock") && randomElement==="scissors"){
        $("#result").text("Player Won !");
        resultAnimation("won");
    }
    // scissors and paper
    else if((input==="paper" || playerChoice === "paper") && randomElement==="scissors"){
        $("#result").text("Computer Won !");
        resultAnimation("won");
    }
    else if((input==="scissors" || playerChoice === "scissors") && randomElement==="paper"){
        $("#result").text("Player Won !");
        resultAnimation("won");
    }
}

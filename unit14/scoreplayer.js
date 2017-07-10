var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var resetbutton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
// var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");


var gameOver = false;
var winningScore = 5;

// var h1 = document.querySelector("h1");

var p1Score = 0;
player1.addEventListener("click", function(){

	if (!gameOver) {
      p1Score++;

    if (p1Score === winningScore) {
    	p1Display.classList.add("winner");
    	gameOver = true;
    }
     p1Display.textContent = p1Score;
   }  
    // console.log(p1Score);
   
});


var p2Score = 0;
player2.addEventListener("click", function()
{
  if (!gameOver) {
      p2Score++;

    if (p2Score === winningScore) {
    	p2Display.classList.add("winner");
    	gameOver = true;
    }
     p2Display.textContent = p2Score;
   }  

});

resetbutton.addEventListener("click", function() {
    reset();
    
});

numInput.addEventListener("change", function(){
     
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});

function reset(){
	p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

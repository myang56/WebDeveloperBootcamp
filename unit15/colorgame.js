// var colors = [
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(255, 0, 255)",
// ];

var numSquares = 6;
var colors = [];
var pickedColor;
// var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


int();
function int() {

	setUpModeButton();
    setUpSquares();
    reset();
}


function setUpModeButton() {
  for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // if (this.textContent === "Easy") {
      // 	numSquares = 3;
      // } else {
      // 	numSquares = 6;
      // }
      reset();
	});
    }
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
	// squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
       
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
        	messageDisplay.textContent = "Correct!";
        	resetButton.textContent = "Play Again?";
        	changeColors(clickedColor);
        	h1.style.backgroundColor = clickedColor;
        } else {
        	this.style.backgroundColor = "#232323";
        	messageDisplay.textContent = "Try Again";
        }
	});
}
}



function reset() {

	// generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();

    // change colorDisplay to matched picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
   resetButton.textContent = "New Colors";
   messageDisplay.textContent = "";

   for (var i = 0; i < squares.length; i++) {

   	if (colors[i]) {
   		squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
   	} else {
         squares[i].style.display = "none";
   	}
	squares[i].style.backgroundColor = colors[i];
   }
     h1.style.backgroundColor = "steelBlue";
}




// easyBtn.addEventListener("click", function(){ 

// 	hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//     colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;

//    for (var i = 0; i < squares.length; i++) {
//       if (colors[i]) {
//       	squares[i].style.backgroundColor = colors[i];
//       } else {
//       	squares[i].style.display = "none";
//       }
//    }
// });


// hardBtn.addEventListener("click", function(){

//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;

//    for (var i = 0; i < squares.length; i++) {
     
//       	squares[i].style.backgroundColor = colors[i];
      
//       	squares[i].style.display = "block";
      
//    }


 
// });

resetButton.addEventListener("click", function(){
	reset();
});
   // colorDisplay.textContent = pickedColor;

  
//     // generate all new colors
//     colors = generateRandomColors(numSquares);
//     // pick a new random color from array
//     pickedColor = pickColor();

//     // change colorDisplay to matched picked color
//     colorDisplay.textContent = pickedColor;
//     // change colors of squares

//     this.textContent = "New Colors";
   
//    messageDisplay.textContent = " ";

//    for (var i = 0; i < squares.length; i++) {
// 	squares[i].style.backgroundColor = colors[i];
//    }
//      h1.style.backgroundColor = "steelBlue";
// });





function changeColors(color) {

	// loop through all squares
      for (var i = 0; i < squares.length; i++) {
	// change each color to match given color;
             squares[i].style.backgroundColor = color;
    }
   }


function pickColor() {
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}


function generateRandomColors(num) {
  // make an array   

   var arr = [];
   // repeat 
  // add num random colors to array
  for (var i = 0; i < num; i++) {
  	// get random color and push into arr
     arr.push(randomColor());
  }
  // return that array
  return arr;
}


function randomColor() {
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random()*255);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random()*255);
	// pick a "blue" from 0 -255
	var b = Math.floor(Math.random()*255);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


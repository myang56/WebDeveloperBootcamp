

// console.log("print 1")
// for (var num = -10; num < 20; num++) {
//      console.log(num);
// }



// function isEven (num){

// 	return num % 2 == 0;
// }

// isEven(20);


// function factorial(num) {

// if (num === 0) {
// 	return 1;
// }
// var sum = 1;
// 	for (var i = num ; i > 0; i--) {
//           sum *= i;
       
// 	}
// 	  return sum;
// }

// factorial(5);

function kebabToSnake(str){

  var res = str.replace(/"-"/g, "_");
    return res;
}

kebabToSnake ("hello-world");
// function printReverse(list) {

// 	for (var i = list.length - 1; i >=0; i--) {
// 		console.log(list[i]);
// 	}

// }

// printReverse([1,2,3,4]);


// function isUniform(list) {

//    for (var i = 1; i < list.length; i++) {
//    	if(list[i] !== list[0]) {
//    		return false;
//    	}

//    	return true;
//    }
// }

// isUniform([1,2,1,1]);


// function sumArray(list) {

// var sum = 0;
//   list.forEach(function(num) {
//      sum += num;
//   });

//   return sum;
// }

// sumArray([1,2,3]);



function max (list) {
   var max = list[0];
   list.forEach(function(num) {
      if (num > max) {
      	max = num;
      }
   });

   return max;
}

max([1,2,3]);
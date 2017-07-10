// function printReverse(list) {

// 	for (var i = list.length - 1; i >=0; i--) {
// 		console.log(list[i]);
// 	}

// }

// printReverse([1,2,3,4]);


function isUniform(list) {

   for (var i = 1; i < list.length; i++) {
   	if(list[0] !== list[i]) {
   		return false;
   	}

   	return true;
   }
}

isUniform([1,2,1,1]);
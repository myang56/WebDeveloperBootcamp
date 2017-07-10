

// var list = ["hah", "jailjkfe", "akfj"];
// var pro = prompt("what would you like to do");

// while (pro !== "quit") {
// if (pro === "new") {
// 	var todo  = prompt("add new todo");
// 	list.push(todo);
// } else if (pro == "list") {
// 	console.log(list);
// }
//   pro = prompt("what would you like to do");
// }

// console.log("you quit the app");


var list =["aha","haha"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
if (input == "new") {

	var todo = prompt("Enter new todo");
	list.push(todo);
	console.log(todo + " added to the list");
} else if (input == "list") {
     
     console.log("**********");
     // // for (var i = 0; i < list.length; i++) {
     
     // 	console.log(i + ": " + list[i]);
     // }

     // for each

     list.forEach(function(todo, i) {
          console.log(i + ": " + todo);
     });
     console.log("**********");
 } else if (input == "delete") {
     
     var d = prompt("Enter index of todo to delete");
   
     list.splice(d, 1);
     console.log("Todo Removed");
    
 }
    input = prompt("what would you like to do?");
}

console.log("you are quit");

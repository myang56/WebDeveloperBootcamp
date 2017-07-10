// check off specific todos by clicking

$("ul").on("click", "li", function(){


	$(this).toggleClass("completed");

 });
   // $(this).css("color", "gray");
   // $(this).css("text-decoration", "line-through");
   
   // if li is gray  ($(this).css("color") === "gray")  will not work

   // the following code equals to $(this).toggleClass("completed");
   // if ($(this).css("color") === "rgb(128, 128, 128)") {

   // 	  $(this).css({
   //     color: "black",
   //     textDecoration: "none"
   // });
   //      // turn it black
   // } else {
   // 	// turn it gray
   // 	$(this).css({
   //     color: "gray",
   //     textDecoration: "line-through"
   // });
   // }

   // click on X to delete Todo
   $("ul").on("click", "span",function(event){
      $(this).parent().fadeOut(500, function(){
      	$(this).remove();
      });
      event.stopPropagation();
   });

   
   // add listener to the input
   $("input[type = 'text']").keypress(function(event){
       if(event.which === 13) {  // 13 is the enter or return key on the keyboard
       	 // grabbing new todo text from input
       	 var todoText = $(this).val();

       	 $(this).val("");
       	 // create a new li and add to ul
       	 $("ul").append("<li><span><i class = 'fa fa-trash'> </i></span> " + todoText + "</li>");
       }
   });

   $(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
   });




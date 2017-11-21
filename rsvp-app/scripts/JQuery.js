
$("document").ready(function(){


var form = $("#registrar");
var input = $("#input");
var ul = $("#invitedList");


//appending names from form
form.on("submit", function(event){
event.preventDefault();
//set input value to name variable
var name = input.val();
//append elements to each ul list item
ul.append("<li> <span>" + name + "</span> </li>");
$("li:last-child").append("<label>Confirmed</label>");
$("label:last-child").append("<input id='checkBox' type='checkbox'/>");
$("li:last-child").append("<button>Remove</button>").append("<button>Edit</button>");
input.val("");
});


//Buttons (Remove, Edit, Save) event handlers
ul.on("click", function(event){

var button = $(event.target);
var span = button.siblings("span");

	if(button.text() == "Remove"){
		button.parent().remove();
	} else if(button.text() == "Edit"){
		button.text("Save");
		span.replaceWith("<input id='saveBtn' type='text' value='" + span.text() + "'/>");
	} else if(button.text() == "Save"){
		button.text("Edit");
		$("input#saveBtn").replaceWith("<span>" + $("input#saveBtn").val() + "</span>");
	}
});

//add border when confirmed is checks
ul.on("change", function(event){

var checkBox = $(event.target);

if(checkBox.is(":checked")){
  checkBox.parent().parent().addClass("newClass");
} else{
	checkBox.parent().parent().removeClass("newClass");
}
});

//Hide People who Have not confirmed
var hideDiv = $("#hideDiv");
hideDiv.append("<p id='hide'> Hide those who have not confirmed </p>");
$("p#hide").append("<input id='confirmed' type='checkbox' />");
$("div.hide").css({"float":"right"});

$("input#confirmed").on("change", function(){

if($(this).is(":checked")){
var array = $("ul").children();

array.each(function(){
if($(this).hasClass("newClass")){
	$(this).css("display", " ");
} else{
	$(this).fadeOut(2000);
}
});

} else{
	var array = $("ul").children();
	array.each(function(){
    $(this).fadeIn(1000);
	});
}
});



}); //onReady function

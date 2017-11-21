$("document").ready(function(){

$("#searchBtn").on("click", function(event){
event.preventDefault();


//animate form
$("#form").css({"positon":"relative", "top": "1%"});



//searchterm var declaration
var searchTerm = $("#search").val();

//url requested
var url="https://api.flickr.com/services/feeds/photos_public.gne?tags=" + searchTerm + "&format=json&jsoncallback=?";


//callback function
function showPhotos(data){
	var showHTML = "<ul>";
$.each(data.items, function(index,photo){
showHTML += "<li> <a href='" + photo.link + "''>";
showHTML+= "<img src='" + photo.media.m + "'> </a> </li>"; 
}); //each loop
showHTML +="</ul>";
$("#photos").html(showHTML);

//photo div animation
$("#photos").hide();
$("#photos").fadeIn(1200);

};// showPhotos function


//getJSON method
$.getJSON(url, showPhotos);

}); //click event

}); //ready function

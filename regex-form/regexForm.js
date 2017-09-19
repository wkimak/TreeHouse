// var declaration
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var phoneInput = document.getElementById("number");
var emailInput = document.getElementById("email");


//username regex
function isValidUsername (username){
var regex = /^[a-z\s]+$/;
var username = usernameInput.value;
return regex.test(username);
}

//password regex
function isValidPassword (password){
//Must contain a lowercase, uppercase letter and a number
var password = passwordInput.value;
return /[a-z]/.test(password) &&
       /[A-Z]/.test(password) &&
       /[0-9]/.test(password);
}

//phone number regex
function isValidNumber(number){
var regex = /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/;
var number = phoneInput.value;
return regex.test(number);
}

//email regex
function isValidEmail(email){
	var regex = /^[A-Za-z0-9]+@gmail\.com/;
	var email = emailInput.value;
	return regex.test(email);
}


//replace phone number regex
function formatNumber(text){
	var regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
	var replacement = '($1) $2-$3';
	return text.replace(regex,replacement);
}

//username event handler
usernameInput.addEventListener("input", function(){
var span1 = document.getElementsByTagName("span")[0];
if(isValidUsername(username) == false){
span1.style.visibility = "visible";
}else{
span1.style.visibility = "hidden";	
}
});

//password event handler
passwordInput.addEventListener("input", function(){
var span2 = document.getElementsByTagName("span")[1];
if(isValidPassword(password) == false){
   span2.style.visibility = "visible";
} else{
	span2.style.visibility = "hidden";
}

});

//phone number event handler
phoneInput.addEventListener("input", function(){
var span3 = document.getElementsByTagName("span")[2];
if(isValidNumber(number) == false){
	span3.style.visibility = "visible";
} else{
	span3.style.visibility = "hidden";
}
});

//email event handler
emailInput.addEventListener("input", function(){
var span4 = document.getElementsByTagName("span")[3];
if(isValidEmail(email) == false){
	span4.style.visibility = "visible";
} else{
	span4.style.visibility = "hidden";
}

});

//format number event hander
phoneInput.addEventListener("blur", function(event){
event.target.value = formatNumber(event.target.value);
});

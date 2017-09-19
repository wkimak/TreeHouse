ar form = document.getElementById("registrar");
var input = document.getElementById("input");
var ul = document.getElementById("invitedList");
var removeBtn = document.querySelector("buttom");
var container = document.querySelector(".container");
var h2 = document.getElementById("invitees");

//appending names from form
form.addEventListener("submit", function(event){
event.preventDefault();

var li = document.createElement("li");
var span = document.createElement("span");
span.textContent = input.value;

ul.appendChild(li);
li.appendChild(span);
input.value = " ";


var label = document.createElement("label");
label.textContent = "Confirmed";
li.appendChild(label);


var checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
label.appendChild(checkBox);

var removeBtn = document.createElement("button");
removeBtn.textContent = "REMOVE";
li.appendChild(removeBtn);

var editBtn = document.createElement("button");
editBtn.textContent = "EDIT";
li.appendChild(editBtn);

});

// removeBtn event handler

ul.addEventListener("click", function(event){
var button = event.target;
var li = button.parentNode;
if(button.tagName == "BUTTON"){
    if(button.textContent == "REMOVE"){
        ul.removeChild(li);
    } else if (button.textContent == "EDIT"){
        var name = li.firstElementChild;
        var newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        li.insertBefore(newInput, name);
        li.removeChild(name);
        newInput.value = name.textContent;
        event.target.textContent = "SAVE";
    } else if(button.textContent == "SAVE"){
        var newInput = li.firstElementChild;
        var name = document.createElement("span");
        name.textContent = newInput.value;
        li.insertBefore(name, newInput);
        li.removeChild(newInput);
        event.target.textContent = "EDIT";
    }
}
});

//checkbox event handler

ul.addEventListener("change", function(event){

var checkBox = event.target;
var checked = checkBox.checked;
var li = checkBox.parentNode.parentNode;

if(checked){
	li.className = "newClass";
} else{
	li.className = " ";
}

});

//Hide names that aren't checked
var div = document.createElement("div");
container.insertBefore(div, h2);
div.style.float = "right";

var hideLabel = document.createElement("label");
hideLabel.textContent = "Hide names that aren't checked";
var hideCheckbox = document.createElement("input");
hideCheckbox.setAttribute("type","checkbox");


div.appendChild(hideLabel);
hideLabel.appendChild(hideCheckbox);

hideCheckbox.addEventListener("change", function(event){
    var isChecked = event.target.checked;
    var names = ul.children;
    if(isChecked){
        for(var i = 0; i < names.length; i++){
            if(names[i].className == "newClass"){
                names[i].style.display = " ";
            } else{
                names[i].style.display = "none";
            }
        }
    }else {
        for(var i = 0; i < names.length; i++){
                names[i].style.display = "inline-block";
        }
    }


});





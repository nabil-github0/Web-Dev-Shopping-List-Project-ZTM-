var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var deleteButton = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}
function deleteAndUnderline() {
	deleteButton.forEach(element => {
		element.addEventListener("click", function() {
			element.parentElement.remove();
		})
	})
	
	list.forEach(element => {
		element.addEventListener("click", function() {
			element.classList.toggle("done");
		})
	})
}

deleteAndUnderline();

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	var div = document.createElement("div");
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("Delete"));
	div.append(li,button);
	ul.appendChild(div);
	button.classList.add("delete");
	div.classList.add("inline");

	button.addEventListener("click",function(){
		button.parentElement.remove();
	})

	li.addEventListener("click",function() {
		li.classList.toggle("done");
	})
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		deleteButton = document.querySelectorAll(".delete");
		list = document.querySelectorAll("li");
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


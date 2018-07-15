alert('hey dummy, find a job');
// Each list item should follow the below formatting
// <li><input type="checkbox"/><span>Make a list</span></li>


var inItemText = document.getElementById("inItemText");

function updateItemStatus () {
	var cbId = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbId);
	if (this.checked) {
		itemText.className = "checked";
	} else {
		itemText.className = "notChecked";
	}
	
}

function renameItem() {
	//this == span
	var newText = prompt("Please enter your changes now");
	
	if (!newText || newText == "" || newText == " ") {
		return false;
		}

		this.innerText = newText;


}

function removeItem() {
	//this == span
	var spanId = this.id.replace("item_", "");
	document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {
	var date = new Date();
	var id = "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();


	var listItem = document.createElement("li");
	listItem.id = "li_" + id;

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + id;
	checkBox.onclick = updateItemStatus;
	console.log(checkBox.id);
	
	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerText = itemText;
	
	//edit functions - revise soon - double click delete
	span.onclick = renameItem;
	span.ondblclick = removeItem;
	
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

inItemText.focus();
inItemText.onkeyup = function(event){
	//event.which (13) = ENTER key
	if(event.which == 13) {
		var itemText = inItemText.value;
		if (!itemText || itemText == "" || itemText == " ") {
		return false;
		}
	
		addNewItem(document.getElementById("toDoList"), itemText);
	inItemText.focus();
	inItemText.select();
	
	}
}
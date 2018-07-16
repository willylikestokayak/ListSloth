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

// function deleteItemStatus() {
// 	console.log('delete button pushed');
// 	//console.log("list item ID# " + li);
// 	var ulParent = document.getElementById("list");
// 	var deleteListItem = document.getElementsByClassName("li");
// 	ulParent.removeChild(deleteListItem);
// 	return false;
// }

function renameItem() {
	//this == span
	var newText = prompt("Please enter your changes now");
	
	if (!newText || newText == "" || newText == " ") {
		return false;
		}
	this.innerText = newText;
}

function addNewItem(list, itemText) {
	var date = new Date();
	var id = "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;
	console.log(listItem.id + " local li id");
	
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + id;
	checkBox.onclick = updateItemStatus;
	
	var removeTask = document.createElement("input");
	removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "Remove");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function(e) {
  listItem.parentNode.removeChild(listItem);
    }, false);
		listItem.appendChild(removeTask);
		
	var span = document.createElement("span");
	span.id = "item_" + id;
	span.innerText = itemText;
	span.onclick = renameItem;
	
	listItem.appendChild(checkBox);
	listItem.appendChild(removeTask);
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
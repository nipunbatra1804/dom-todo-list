const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

function debugPrint(content) {
	console.log(content);
}

function removeButtonListener(event){
	let btn = event.target;
	const taskInfo = btn.previousSibling;
	const divElement = btn.parentNode;
	divElement.remove();
}


function appendRemoveButton(listElement){
	const removeButton = document.createElement('button');
	const parentNode = listElement.parentNode;

	removeButton.textContent = "remove";
	removeButton.classList.add("remove");
	removeButton.addEventListener('click',removeButtonListener);
	parentNode.insertBefore(removeButton,listElement.nextSibling);
}

function addArrayToList(array){
	array.forEach(element => {
		const li = document.createElement('li')
		const div = document.createElement('div');
		li.textContent = element;
		
		const ol = document.getElementById("todo-list");
		div.appendChild(li);
		appendRemoveButton(li);
		div.classList.add("list-element");
		ol.appendChild(div);
	});
}

function addItemToList(){
	const inputBox = document.getElementById("task-name");
	let inputText = inputBox.value;
	const div = document.createElement('div');
	const li = document.createElement('li')
	li.textContent = inputText;
	
	const ol = document.getElementById("todo-list");
	div.appendChild(li);
	appendRemoveButton(li);
	div.classList.add("list-element");
	ol.appendChild(div);
	
}

const buttonElement = document.querySelector('.add-task');
buttonElement.addEventListener('click', ()=>{
	addItemToList();
});

let listObject = document.getElementById("todo-list");
listObject.addEventListener("click", function (event){
	debugPrint(event.target);
	let li =  event.target;
	li.classList.toggle("done");
});

addArrayToList(tasks)
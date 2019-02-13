const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

function debugPrint(content) {
  console.log(content);
}

function removeButtonListener(event) {
  let btn = event.target;
  const divElement = btn.parentNode;
  divElement.remove();
}

function appendRemoveButton(listElement) {
  const removeButton = document.createElement("button");
  const parentNode = listElement.parentNode;

  removeButton.textContent = "remove";
  removeButton.classList.add("remove");
  removeButton.addEventListener("click", removeButtonListener);
  parentNode.insertBefore(removeButton, listElement.nextSibling);
}

function addTaskAsDiv(todoVal) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.textContent = todoVal;

  const ol = document.getElementById("todo-list");
  div.appendChild(li);
  appendRemoveButton(li);
  div.classList.add("list-element");
  ol.appendChild(div);
}

function addArrayToList(array) {
  array.forEach(element => {
    addTaskAsDiv(element);
  });
}

function addItemToList() {
  const inputBox = document.getElementById("task-name");
  let inputText = inputBox.value;
  addTaskAsDiv(inputText);
  inputBox.value = "";
}

const buttonElement = document.querySelector(".add-task");
buttonElement.addEventListener("click", () => {
  addItemToList();
});

const listObject = document.getElementById("todo-list");
listObject.addEventListener("click", function(event) {
  if (event.target.nodeName === "LI") {
    let li = event.target;
    li.classList.toggle("done");
  }
});

const inputBox = document.getElementById("task-name");
inputBox.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
    addTaskAsDiv(inputBox.value);
    inputBox.value = "";
  }
  return;
});

addArrayToList(tasks);

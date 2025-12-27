
const addBtn = document.querySelector("#add-btn")
console.log(addBtn)

const arrTasks = [
]

console.log(arrTasks)

const eventAdder = function(youknow) {
  const taskContainer = document.querySelector(".tasks-region");
  const div = document.createElement("div");
  const divTwo = document.createElement("div");
  let input = document.createElement("input");
  input.type = "checkbox";
  let span = document.createElement("span");
  span.textContent = youknow;
  span.class = "check-text";
  const buttonEdit = document.createElement("button");
  buttonEdit.class = "edit-task-btn";
  buttonEdit.textContent = "Edit";
  const buttonDel = document.createElement("button");
  buttonDel.class = "delete-task-btn";
  buttonDel.textContent = "Delete";
  divTwo.append(input)
  divTwo.append(span)
  div.append(divTwo)
  div.append(buttonEdit)
  div.append(buttonDel)
  taskContainer.append(div)

}

addBtn.addEventListener("click", function() {
  let taskInput = document.querySelector("#task-input");
  arrTasks.push(taskInput.value);
  eventAdder(taskInput.value);
  taskInput.value = "";
  console.log(arrTasks);
})

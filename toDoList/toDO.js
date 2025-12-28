
const addBtn = document.querySelector("#add-btn")
console.log(addBtn)

const editBtn = document.querySelector(".edit-task-btn")
console.log(editBtn)

const delBtn = document.querySelector(".delete-task-btn")
console.log(delBtn)

const arrTasks = [
]

console.log(arrTasks)

const eventAdder = function(youknow) {
  const taskContainer = document.querySelector(".tasks-region");
  const div = document.createElement("div");
  const divTwo = document.createElement("div");
  divTwo.className = "input-one";
  div.className = "input-box";
  let input = document.createElement("input");
  input.type = "checkbox";
  let span = document.createElement("span");
  span.textContent = youknow;
  span.className = "check-text";
  const buttonEdit = document.createElement("button");
  buttonEdit.className = "edit-task-btn";
  buttonEdit.textContent = "Edit";
  const buttonDel = document.createElement("button");
  buttonDel.className = "delete-task-btn";
  buttonDel.textContent = "Delete";
  divTwo.append(input)
  divTwo.append(span)
  div.append(divTwo)
  div.append(buttonEdit)
  div.append(buttonDel)
  taskContainer.append(div)

}

const remaintask = document.querySelector("#remaining-task")
console.log(remaintask)

addBtn.addEventListener("click", function() {
  let taskInput = document.querySelector("#task-input");
  arrTasks.push(taskInput.value);
  eventAdder(taskInput.value);
  taskInput.value = "";
  console.log(arrTasks);
  let numes = arrTasks.length;
  console.log(numes)
  remaintask.textContent = numes;
})

delBtn.addEventListener("click", function() {
  arrTasks.pop();
})



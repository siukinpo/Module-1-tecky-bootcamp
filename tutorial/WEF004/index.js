// window.onload = setTimeout(() => {
//   alert("Welcome to my TODO List");
// }, 1000);

const addTODO = document.querySelector("button.addToDoButton");
const todos = document.querySelector("div#TODOs");
const textarea = document.querySelector("#newTodoTextarea");
const delButtons = document.querySelectorAll("button.delete");

let idx = 0;
let todo = [];

function delTODO(event) {
  const sender = event.currentTarget;
  const idx = sender.id.replace("del-", "");
  //todo + idx => delete?
  todo = todo.filter((t) => t.idx != idx);
  //   todo.splice(idx, 1);
  todos.innerHTML = "";
  for (let item of todo) {
    todos.innerHTML =
      todos.innerHTML +
      `<div class="todo" id="todo_${item.idx}">
    <div>TODO#${item.idx + 1}</div>
    <div id="hr-style"></div>
    <div>${item.content}</div>
    <button class="delete" id="del-${item.idx}" >Delete</button>
  </div>`;
  }

  const delButtons = document.querySelectorAll("button.delete");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", delTODO);
  }
}

addTODO.addEventListener("click", (event) => {
  todo.push({
    idx: idx,
    content: textarea.value,
  });

  todos.innerHTML =
    todos.innerHTML +
    `<div class="todo" id="todo_${idx}">
    <div>TODO#${idx + 1}</div>
    <div id="hr-style"></div>
    <div>${textarea.value}</div>
    <button class="delete" id="del-${idx}" >Delete</button>
  </div>`;
  idx++;
  //   textarea.value = idx = idx + 1;
  const delButtons = document.querySelectorAll("button.delete");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", delTODO);
  }
});

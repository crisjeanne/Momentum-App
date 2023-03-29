export function taskRender(){
    let list = JSON.parse(localStorage.getItem("list")) || [];
const taskCount = document.querySelector(".task-count");

// Render
function renderList() {
  const count = JSON.parse(localStorage.getItem("list")).length;
  taskCount.innerHTML =
    count === 0
      ? `You Have Completed Your Tasks!`
      : count === 1
      ? `You Have 1 Last Task To Complete`
      : `You Have ${count} Tasks Left To Complete`;

  let ul = document.getElementById("list");
  ul.innerHTML = "";

  list.forEach(function (item, index) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("click", function () {
      item.completed = !item.completed;
      localStorage.setItem("list", JSON.stringify(list));

      renderList();
    });

    let span = document.createElement("span");
    if (item.completed) {
      span.classList.add("completed");
    }

    span.textContent = item.task;
    li.appendChild(checkbox);
    li.appendChild(span);
    let button = document.createElement("button");
    button.innerHTML = "&#10006;";
    button.addEventListener("click", function () {
      list.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(list));
      renderList();
    });

    li.appendChild(button);
    ul.appendChild(li);
  });
}

renderList();

document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let task = e.target.value.trim();
    if (task !== "") {
      addTask(task);
      e.target.value = "";
    }
  }
});

// Add a task to list and update local storage
function addTask(task) {
  list.push({ task: task, completed: false });
  localStorage.setItem("list", JSON.stringify(list));
  renderList();
}

const panel = document.querySelector(".task-container");
const panelButton = document.querySelector(".task-button");

panel.style.display = "none";

function panelShow() {
  if (panel.style.display == "none") {
    panel.style.display = "flex";
  } else if (panel.style.display != "none") {
    panel.style.display = "none";
  }
}

panelButton.addEventListener("click",panelShow)
}
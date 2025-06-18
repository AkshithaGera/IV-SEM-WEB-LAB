function addTask() {
  let taskText = document.getElementById("taskInput").value;
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

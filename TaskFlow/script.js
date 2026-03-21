let taskId = 0;

// Add task on button click
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (value === "") return;

  const task = createTodoTask(value);
  document.getElementById("todo-list").appendChild(task);

  input.value = "";
});

// Create a To Do task card with Start button
function createTodoTask(text) {
  const task = document.createElement("div");
  task.className = "task-card";
  task.id = "task-" + taskId++;

 task.innerHTML = `
  <div class="todo-item">
    <p>${text}</p>
    <button onclick="startTask('${task.id}', '${text}')">Start</button>
  </div>
`;
  return task;
}

// Move task from To Do to In Progress with progress bar
function startTask(id, text) {
  // Remove from To Do
  const oldTask = document.getElementById(id);
  if (oldTask) oldTask.remove();

  // Create new In Progress task
  const task = createInProgressTask(text);
  document.getElementById("inprogress-list").appendChild(task);
}

// Create In Progress task card with progress bar and button
function createInProgressTask(text) {
  const task = document.createElement("div");
  task.className = "task-card";
  task.dataset.progress = 0;

  task.innerHTML = `
    <p>${text}</p>
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>
    <button onclick="increaseProgress(this)">+ Progress</button>
  `;

  return task;
}

// Increase progress on In Progress task
function increaseProgress(button) {
  const task = button.parentElement;
  let progress = parseInt(task.dataset.progress);

  if (progress >= 5) return; // Max progress reached

  progress++;
  task.dataset.progress = progress;

  const progressBar = task.querySelector(".progress-bar");
  progressBar.style.width = (progress * 20) + "%";
  progressBar.textContent = `${progress}/5`;

  // When progress hits 5, move to Done
  if (progress === 5) {
    setTimeout(() => {
      const taskText = task.querySelector("p").innerText;
      const doneTask = createDoneTask(taskText);
      document.getElementById("done-list").appendChild(doneTask);
      task.remove();
    }, 300);
  }
}

// Create Done task card (simple text only)
function createDoneTask(text) {
  const task = document.createElement("div");
  task.className = "task-card done";

  task.innerHTML = `<p>${text}</p>`;

  return task;
}
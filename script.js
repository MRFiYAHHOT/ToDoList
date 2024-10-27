function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById('task-list');

    // Create list item for task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add click event to toggle completion
    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => taskItem.remove();
    
    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear the input
  }
}

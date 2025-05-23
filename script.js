function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Clear previous error
  errorMsg.textContent = '';

  // Input validation
  if (taskText === '') {
    errorMsg.textContent = '🚫 Please enter a task.';
    return;
  }
  if (/^[0-9!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]*$/.test(taskText)) {
    errorMsg.textContent = '🚫 Please enter valid text, not just numbers or symbols.';
    return;
  }

  // Determine emoji based on keywords
  let emoji = '🛍️'; // default
  const lowerText = taskText.toLowerCase();
  if (lowerText.includes('clean') || lowerText.includes('wash')) emoji = '🧹';
  else if (lowerText.includes('food') || lowerText.includes('cook') || lowerText.includes('dinner')) emoji = '🍽️';
  else if (lowerText.includes('temple') || lowerText.includes('god') || lowerText.includes('praying')) emoji = '🛐';
  else if (lowerText.includes('walk') || lowerText.includes('walking') || lowerText.includes('jogging')) emoji = '🚶';
  else if (lowerText.includes('exercise') || lowerText.includes('gym') || lowerText.includes('run')) emoji = '🏋️';
  else if (lowerText.includes('study') || lowerText.includes('homework') || lowerText.includes('read')) emoji = '📚';
  else if (lowerText.includes('shop') || lowerText.includes('buy')) emoji = '🛍️';

  // Create task element
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = `${emoji} ${taskText}`;
  span.onclick = () => span.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    if (confirm('❗ Are you sure you want to delete this task?')) {
      li.remove();
      checkEmpty();
    }
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
  checkEmpty();
}

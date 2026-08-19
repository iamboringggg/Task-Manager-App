const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const countEl = document.getElementById('task-count');
const filterButtons = document.querySelectorAll('.filter');

let tasks = [];
let currentFilter = 'all';

function getVisibleTasks() {
  switch (currentFilter) {
    case 'active':
      return tasks.filter((t) => !t.completed);
    case 'completed':
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
}

function getRemainingCount() {
  return tasks.filter((t) => !t.completed).length;
}

function renderCount() {
  const remaining = getRemainingCount();
  countEl.textContent = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} remaining`;
}

function render() {
  const visible = getVisibleTasks();
  list.innerHTML = '';

  if (visible.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty-state';
    li.textContent = 'No tasks to show.';
    list.appendChild(li);
  }

  visible.forEach((task) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'task-item completed' : 'task-item';

    const check = document.createElement('span');
    check.className = 'task-check';
    check.textContent = '✓';

    const title = document.createElement('span');
    title.className = 'task-title';
    title.textContent = task.title;

    li.append(check, title);
    li.addEventListener('click', () => {
      task.completed = !task.completed;
      render();
    });

    list.appendChild(li);
  });

  renderCount();
}

function addTask(title) {
  tasks.push({ title, completed: false });
  render();
}

function handleSubmit(event) {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;
  addTask(title);
  input.value = '';
  input.focus();
}

function handleFilter(event) {
  const button = event.currentTarget;
  filterButtons.forEach((b) => b.classList.remove('active'));
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  render();
}

form.addEventListener('submit', handleSubmit);
filterButtons.forEach((button) => button.addEventListener('click', handleFilter));

render();
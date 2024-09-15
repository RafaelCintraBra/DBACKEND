// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Criação do elemento da nova tarefa
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="toggleCompletion(this)">Concluir</button>
            <button class="remove-btn" onclick="removeTask(this)">Remover</button>
        </div>
    `;

    // Adicionar a nova tarefa à lista
    document.getElementById('taskList').appendChild(li);

    // Limpar o campo de input
    taskInput.value = '';
}

// Função para marcar uma tarefa como concluída
function toggleCompletion(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

// Função para remover uma tarefa
function removeTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
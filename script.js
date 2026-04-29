const input = document.querySelector('#tarefaInput');
const lista = document.querySelector('#listaTarefas');

function adicionarTarefa() {
  if (!input.value.trim()) return alert("Escreva a tarefa!"); // Valida e avisa
  
  lista.innerHTML += `<li>${input.value}</li>`; // Adiciona a tarefa
  input.value = ''; // Limpa o input
  input.focus(); // Foca no input
}

// Escuta clique no botão e tecla 'Enter'
document.querySelector('#addBtn').addEventListener('click', adicionarTarefa);
input.addEventListener('keypress', e => e.key === 'Enter' && adicionarTarefa());

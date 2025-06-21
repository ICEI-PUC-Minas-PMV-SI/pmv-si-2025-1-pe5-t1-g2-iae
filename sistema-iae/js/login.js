document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.login-tab');
  const loginInput = document.getElementById('login');
  const passwordInput = document.getElementById('password');
  const form = document.getElementById('login-form');

  const defaults = {
    aluno:     { login: 'vesoares', password: '********' },
    professor: { login: 'jsilva',   password: '********' }
  };

  // Função para alternar aba e preencher campos
  function switchTab(tabEl) {
    tabs.forEach(t => t.classList.toggle('active', t === tabEl));
    const key = tabEl.dataset.tab;
    loginInput.value    = defaults[key].login;
    passwordInput.value = defaults[key].password;
  }

  // Associa clique às abas
  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab));
  });

  // Inicializa valores da aba ativa
  switchTab(document.querySelector('.login-tab.active'));

  // Submissão: redireciona conforme aba
  form.addEventListener('submit', e => {
    e.preventDefault();
    const activeTab = document.querySelector('.login-tab.active').dataset.tab;
    const targetUrl = activeTab === 'aluno'
      ? 'portal-aluno.html'
      : 'portal-professor.html';
    window.location.href = targetUrl;
  });
});

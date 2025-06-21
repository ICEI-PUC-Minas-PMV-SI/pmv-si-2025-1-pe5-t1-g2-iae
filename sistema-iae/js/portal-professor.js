document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs li');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Atualiza a aba ativa
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      // Exibe o conteúdo correspondente
      contents.forEach(c => c.classList.toggle('active', c.id === target));
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tabs     = document.querySelectorAll('.tabs li');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const alvo = tab.getAttribute('data-tab');

      // Ativa a aba clicada
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Mostra o conteúdo correspondente e esconde os demais
      contents.forEach(sec => {
        if (sec.id === alvo) sec.classList.add('active');
        else                 sec.classList.remove('active');
      });
    });
  });
});

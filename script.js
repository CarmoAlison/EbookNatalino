// Seleciona todos os itens de FAQ (cada item de pergunta)
const faqItems = document.querySelectorAll('.faq-item');

// Adiciona o evento de clique a cada item de FAQ
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar ou esconder a resposta
    item.classList.toggle('active');

    // Verifica se o item está ativo, se estiver, mostra a resposta
    const answer = item.querySelector('p');
    if (item.classList.contains('active')) {
      answer.style.display = 'block';  // Mostra a resposta
    } else {
      answer.style.display = 'none';   // Oculta a resposta
    }
  });
});

var btn = document.querySelector('.btn');
var img = document.querySelector('.js-hidden');
var removeBtn = document.querySelector('.remove-btn');

// escondendo a imagem ao iniciar a página
removeBtn.setAttribute('hidden', ''); 

// exibindo a imagem e o botão de Remover Imagem ao clicar no botão Visualizar Imagem
btn.addEventListener('click', function () {
  img.setAttribute('class', 'js-show');
  removeBtn.removeAttribute('hidden');
});

// removendo a imagem e o botão de Remover Imagem ao clicar na imagem
img.addEventListener('click', function () {
  img.setAttribute('class', 'js-hidden');
  removeBtn.setAttribute('hidden', '');
});

// removendo a imagem e o botão de Remover Imagem ao clicar no botão de Remover Imagem
removeBtn.addEventListener('click', function () {
  img.setAttribute('class', 'js-hidden');
  removeBtn.setAttribute('hidden', '');
});

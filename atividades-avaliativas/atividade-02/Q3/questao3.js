let caixaDeTexto = document.getElementById('myText');
caixaDeTexto.addEventListener('blur', checkUserName);

function checkUserName() {
  const regexValidarTexto = /^[a-zA-Z]+$/g;
  const regexSeTemNumero = /^\d+$/;
  let msgValidacao = document.getElementById('result');

  this.value.replace(/\s/g, '');
  console.log('espacoo', regexSeTemNumero.test(this.value));

  if (regexValidarTexto.test(this.value) && this.value) {
    msgValidacao.textContent = 'success';
    msgValidacao.style.cssText = 'background-color: green';
  } else if (regexSeTemNumero.test(this.value)) {
    msgValidacao.textContent = 'Input contém números”';
    msgValidacao.style.cssText = 'background-color: red';
  } else {
    msgValidacao.textContent = 'Input vazio';
    msgValidacao.style.cssText = 'background-color: yellow';
  }
}

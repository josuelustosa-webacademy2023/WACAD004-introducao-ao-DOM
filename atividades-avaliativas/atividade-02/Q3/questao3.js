let caixaDeTexto = document.getElementById("myText");

caixaDeTexto.addEventListener("blur", function checkUserName() {
  let msgValidacao = document.getElementById("result");

  const valorDoInput = caixaDeTexto.value.trim();
  if (valorDoInput === "") {
    msgValidacao.textContent = "O campo está vazio.";
    msgValidacao.style.cssText = "background-color: white";
  } else if (/^[a-zA-Z]+$/.test(valorDoInput)) {
    msgValidacao.textContent = "Input não contém números";
    msgValidacao.style.cssText = "background-color: green";
  } else if (/^[a-zA-Z0-9]+$/.test(valorDoInput)) {
    msgValidacao.textContent = "Input contém números";
    msgValidacao.style.cssText = "background-color: red";
  } else {
    msgValidacao.textContent =
      "Input contém outros caracteres além de letras e números.";
    msgValidacao.style.cssText = "background-color: white";
  }
});

caixaDeTexto.addEventListener("paste", function (event) {
  event.preventDefault();
  alert("Não é permitido colar algo aqui :(");
});

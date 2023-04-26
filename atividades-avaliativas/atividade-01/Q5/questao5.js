// alterando fonte da tag body
let elBody = document.getElementsByTagName('body')[0];
elBody.setAttribute('style', 'font-family: Arial, sans-serif');

// adicionando a tag style no final da tag head
const tagStyle = document.createElement('style');
document.head.appendChild(tagStyle);

tagStyle.innerText = `.listItem { color: red; }`;

// adicionando dados nas tags span dentro das li
const DADOS_PESSOA = ['Josué Lustosa', 22, 'Manaus'];

const inserindoNomeCompleto = document.getElementById('fullname');
inserindoNomeCompleto.innerText = `${DADOS_PESSOA[0]}`;

const inserindoIdade = document.getElementById('age');
inserindoIdade.innerText = `${DADOS_PESSOA[1]}`;

const inserindoCidadeNatal = document.getElementById('hometown');
inserindoCidadeNatal.innerText = `${DADOS_PESSOA[2]}`;

//adicionando a classe "listItem" nas tags li
let lista = document.getElementsByTagName('li');

for (let i = 0; i < lista.length; i++) {
    lista[i].setAttribute('class', 'listItem');
}

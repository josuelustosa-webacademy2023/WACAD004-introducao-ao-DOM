// obtendo o primeiro parágrafo com querySelector
const primeiroParagrafoQuerySelector = document.querySelector("p");
console.log(
  "Primeiro parágrafo com querySelector",
  primeiroParagrafoQuerySelector
);

// obtendo o primeiro parágrafo com getElementByTagName
const primeiroParagrafoByTagName = document.getElementsByTagName("p")[0];
console.log(
  "Primeiro parágrafo com getElementsByTagName",
  primeiroParagrafoByTagName
);

// percorrendo a nodeList de p com loop
const arrayDeParagrafos = ["one", "two", "tree", "four"];

const paragrafos = document.getElementsByTagName("p");

for (let i = 0; i < paragrafos.length; i++) {
  console.log("Parágrafos", paragrafos[i]);
  // inserindo cada id do array de parágrafos
  paragrafos[i].setAttribute("id", arrayDeParagrafos[i]);

  // inserindo a classe paragraph em cada elemento p
  paragrafos[i].setAttribute("class", "paragraph");

  // modificando o CSS dos elementos p
  paragrafos[i].setAttribute(
    "style",
    "font-family: Monospace; font-size: 14pt; border: 8px solid pink"
  );
}

// modificando o CSS do penúltimo parágrafo
const penultimoParagrafo = document.getElementsByTagName("p")[2];
penultimoParagrafo.setAttribute(
  "style",
  "font-family: Monospace; font-size: 14pt; border: 8px solid pink;background-color: blue"
);

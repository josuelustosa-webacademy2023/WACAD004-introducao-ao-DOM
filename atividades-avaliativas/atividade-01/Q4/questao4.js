// elemento <div class="estufa"> com querySeletor
const classEstufaQuerySelector = document.querySelector("div");
console.log("Classe estufa", classEstufaQuerySelector);

// verduras a partir de estufa
let listaDaEstufa = document.querySelector(".estufa");
let itensDaLista = listaDaEstufa.childNodes;
console.log("Item verduras a partir de estufa", itensDaLista[3]);

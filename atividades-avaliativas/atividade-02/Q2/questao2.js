const elementoContainer = document.getElementById("container");

// criando elemento p com texto de cor vermelho
let textP = document.createTextNode("Hierarquia de Objetos");
let elementoP = document.createElement("p");
elementoP.appendChild(textP);

elementoContainer.appendChild(elementoP);
elementoP.setAttribute("style", "background-color: red");

// criando elemento h3 com texto de cor azul
let textH3 = document.createTextNode("Windows Object");
let elementoH3 = document.createElement("h3");
elementoH3.appendChild(textH3);

elementoContainer.appendChild(elementoH3);
elementoH3.setAttribute("style", "background-color: blue");

// criando uma <div> com borda 2px, solid, black e background: pink e com elementos filhos
let elementoH1Div = document.createElement("h1");
elementoH1Div.textContent = "Título da DIV";

let elementoPDiv = document.createElement("p");
elementoPDiv.textContent = "Parágrafo da DIV";

// let textPDiv = document.createTextNode("sdsfsfsft");

let elementoDiv = document.createElement("div");
elementoDiv.appendChild(elementoH1Div);
elementoDiv.appendChild(elementoPDiv);

//
// elementoH1Div.appendChild(elementoDiv)

elementoContainer.appendChild(elementoDiv);
elementoDiv.setAttribute(
  "style",
  "border: 2px solid black; background-color: pink"
);

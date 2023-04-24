// Item A
let clickDivD = (document.getElementById("divD").style.cursor = "pointer"); // deixando a div clicável

let divD = document
  .getElementById("divD")
  .addEventListener("click", function alterandoCorDeFundo(event) {
    event.target.style.cursor = "pointer";

    let corAtual = event.target.style.backgroundColor;

    if (corAtual === "rgb(192, 192, 192)") {
      event.target.style.backgroundColor = "rgb(218, 165, 32)";
    } else {
      event.target.style.backgroundColor = "rgb(192, 192, 192)";
    }
  });

// Item B
document.getElementById("divB").addEventListener("mouseover", function (event) {
  let corAtual = event.target.style.backgroundColor;

  switch (corAtual) {
    case "blue":
      event.target.style.backgroundColor = "#00FF00";
      break;
    case "#00FF00":
      event.target.style.backgroundColor = "#FF4500";
      break;
    case "#FF4500":
      event.target.style.backgroundColor = "rgb(255, 215, 0)";
      break;
    case "rgb(255, 215, 0)":
      event.target.style.backgroundColor = "rgb(211, 211, 211)";
      break;
    case "rgb(211, 211, 211)":
      event.target.style.backgroundColor = "blue";
      break;
    default:
      event.target.style.backgroundColor = "blue";
  }
});

// Item C
let divA = document.getElementById("divA");

divA.addEventListener("mouseenter", function () {
  divA.style.backgroundColor = "red";
});

divA.addEventListener("mouseleave", function () {
  divA.style.backgroundColor = "green";
});

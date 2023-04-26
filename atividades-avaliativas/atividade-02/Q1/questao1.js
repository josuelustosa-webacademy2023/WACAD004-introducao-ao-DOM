// Item A
let clickDivD = (document.getElementById('divD').style.cursor = 'pointer'); // deixando a div clicável

let divD = document
  .getElementById('divD')
  .addEventListener('click', function alterandoCorDeFundo(event) {
    let corAtual = event.target.style.backgroundColor;

    if (corAtual === 'rgb(192, 192, 192)') {
      event.target.style.backgroundColor = 'rgb(218, 165, 32)';
    } else {
      event.target.style.backgroundColor = 'rgb(192, 192, 192)';
    }
  });

// Item B
const LISTA_DE_CORES = {
  azul: 'blue',
  verde: '#00FF00',
  amarelo: 'rgb(255, 215, 0)',
  laranja: '#FF4500',
  cinza: 'rgb(211, 211, 211)',
};

// transformando hex em rgb
function hexToRgb(hex) {
  hex = hex.replace('#', '');

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

document.getElementById('divC').addEventListener('mouseover', function (event) {
  let corAtual = event.target.style.backgroundColor;

  let alterarCor;

  switch (corAtual) {
    case '':
      alterarCor = LISTA_DE_CORES.azul;
      break;
    case LISTA_DE_CORES.azul:
      alterarCor = LISTA_DE_CORES.verde;
      break;
    case hexToRgb(LISTA_DE_CORES.verde):
      alterarCor = LISTA_DE_CORES.laranja;
      break;
    case hexToRgb(LISTA_DE_CORES.laranja):
      alterarCor = LISTA_DE_CORES.amarelo;
      break;
    case LISTA_DE_CORES.amarelo:
      alterarCor = LISTA_DE_CORES.cinza;
      break;
    default:
      alterarCor = LISTA_DE_CORES.azul;
  }
  
  event.target.style.backgroundColor = alterarCor;
});

// Item C
let divB = document.getElementById('divB');

divB.addEventListener('mouseenter', function () {
  divB.style.backgroundColor = 'red';
});

divB.addEventListener('mouseleave', function () {
  divB.style.backgroundColor = 'green';
});

var texto = "Meus Projetos";
var atraso = 200;
var textoElemento = document.querySelector(".projetos-titulo");

var contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();

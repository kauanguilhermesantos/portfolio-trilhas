var texto = "Kauan Guilherme Santos";
var atraso = 200;
var textoElemento = document.querySelector(".apresentacao-nome");

var contadorDeLetras = 0;

function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
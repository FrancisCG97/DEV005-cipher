import cipher from './cipher.js';

//ELEMENTOS DEL DOM

const btnDescifrar = document.getElementById('descifrar');
const btnCifrar = document.getElementById('cifrar');
const btnVolver = document.getElementById('volver');

//EVENTOS
btnCifrar.addEventListener('click', cifrar);
btnDescifrar.addEventListener('click', descifrar);
btnVolver.addEventListener('click', volver);

//FUNCIONES

function cifrar() {

  const desplazamiento = document.getElementById("offset").value;

  const textoInicial = document.getElementById("txt-cifrar").value;

  //LLAMAR FUNCION CIPHER
  document.getElementById("txt").innerHTML = cipher.encode(desplazamiento, textoInicial);
}

function descifrar() {

  const desplazamiento_descifrar = document.getElementById('offset').value;

  const textoCifrado = document.getElementById('txt-descifrar').value;

  //LLAMAR FUNCION CIPHER
  document.getElementById('txt').innerHTML = cipher.decode(desplazamiento_descifrar, textoCifrado);
}

function volver() {
  window.location.reload();
}

console.log(cipher);

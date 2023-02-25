import cipher from './cipher.js';

//Elementos del DOM

const btnDescifrar = document.getElementById('descifrar');
const btnCifrar = document.getElementById('cifrar');

//EVENTOS
btnCifrar.addEventListener('click', cifrar);

//FUNCIONES

function cifrar() {
    console.log("cifrar");

    const desplazamiento = document.getElementById("offset").value;
    console.log(desplazamiento);

    const textoInicial = document.getElementById("txt-cifrar").value;//capture el texto
    console.log(textoInicial)//lo mostre en consola
    document.getElementById("txt").innerHTML = textoInicial;//lo mostre abajo

    //LLAMAR FUNCION CIPHER
    cipher.encode(textoInicial, desplazamiento);
}



console.log(cipher);

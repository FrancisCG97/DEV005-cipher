import cipher from './cipher.js';

//Elementos del DOM


const borrar = document.getElementById('volver');
const btnDescifrar = document.getElementById('descifrar')
const btnCifrar = document.getElementById('cifrar')


//FUNCIONES


function escuchar() {
  console.log("cifrar")

  const textoInicial = document.getElementById("txt-cifrar").value;//capture el texto
  console.log(textoInicial)//lo mostre en consola
  document.getElementById("txt").innerHTML = textoInicial;//lo mostre abajo

  //guardo el texto en un array
  const textoInicialPartido = textoInicial.split('')//use split para dividir el texto 
  console.log(textoInicialPartido)//lo mostre en consola
  let largoArray = textoInicialPartido.length;
  console.log(largoArray)

  
  
for (let i = 0; i < largoArray; i++) {
  console.log(
    textoInicialPartido[i].charCodeAt(0));
}






  
  // const textoChar = textoInicial.charCodeAt()
  // console.log(textoChar)
  
  

}


















function escuchar2() {

  console.log("decifrar")
  const textoInicial2 = document.getElementById("txt-descifrar").value;
  console.log(textoInicial2)
  document.getElementById("txt").innerHTML = textoInicial2;
}

// function remove() {
//   console.log("funciona")
// return borrar.parentNode.removeChild("txt");
  
// }

btnDescifrar.addEventListener('click', escuchar2)
btnCifrar.addEventListener('click', escuchar)
// borrar.addEventListener('click', remove)


console.log(cipher);
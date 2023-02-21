import cipher from './cipher.js';

//Elementos del DOM


// const borrar = document.getElementById('volver');
const btnDescifrar = document.getElementById('descifrar')
const btnCifrar = document.getElementById('cifrar')



//FUNCIONES

//CIFRADO

function escuchar() {
  console.log("cifrar")

  const desplazamiento = document.getElementById("offset").value;
  console.log(desplazamiento)

  const textoInicial = document.getElementById("txt-cifrar").value;//capture el texto
  console.log(textoInicial)//lo mostre en consola
  document.getElementById("txt").innerHTML = textoInicial;//lo mostre abajo


  //guardo el texto en un array
  const textoInicialPartido = textoInicial.split('')//use split para dividir el texto 
  console.log(textoInicialPartido)//lo mostre en consola
  let largoArray = textoInicialPartido.length;
  console.log(largoArray)

  //TEXTO A CODIGO ASCII

  for (let i = 0; i < largoArray; i++) {
    const charOriginal = textoInicialPartido[i].charCodeAt(0);
    // console.log("TEXTO ORIGINAL " +charOriginal)
    const textoAconvertir = charOriginal + + desplazamiento;
    // console.log("TEXTO CONVERTIDO " + textoAconvertir)

    const textoFinal = textoAconvertir.toString();
    console.log(textoFinal)


    const textoFinal2 = String.fromCharCode(textoFinal);
    console.log(textoFinal2)

    const letra = [textoFinal2]
    console.log(letra)


    let textoFinal3 = letra.toString();
    console.log(textoFinal3)
    // alert(textoFinal2)

    document.getElementById("txt").innerHTML = textoFinal3;
  }

}



  //DESCIFRADO

  function escuchar_descifrado() {
    console.log("descifrar")

    const desplazamiento = document.getElementById("offset").value;
    console.log(desplazamiento)

    const textoInicialDescifrado = document.getElementById("txt-descifrar").value;//capture el texto
    console.log(textoInicialDescifrado)//lo mostre en consola
    document.getElementById("txt").innerHTML = textoInicialDescifrado;//lo mostre abajo


    //guardo el texto en un array
    const textoInicialPartido_descifrado = textoInicialDescifrado.split('')//use split para dividir el texto 
    console.log(textoInicialPartido_descifrado)//lo mostre en consola
    let largoArray_descifrado = textoInicialPartido_descifrado.length;
    console.log(largoArray_descifrado)

    //CODIGO ASCII A TEXTO

    for (let i = 0; i < largoArray_descifrado; i++) {
      const charOriginal_descifrado = String.fromCharCode(textoInicialPartido_descifrado[i])//.toString();
      //console.log("TEXTO ORIGINAL " +charOriginal_descifrado)
      const textoAdescifrar = charOriginal_descifrado - - desplazamiento;
      //console.log("TEXTO CONVERTIDO " + textoAconvertir)

      const textoFinal_descifrado = Number.parseInt(textoAdescifrar);//.toString();
      console.log(textoFinal_descifrado.toString())


      const textoFinal_descifrado2 = String.fromCharCode(textoFinal_descifrado);//.toString();
      console.log(textoFinal_descifrado2)

      const codigoAscii = [textoFinal_descifrado2]
      console.log(codigoAscii)


      let textoFinal_descifrado3 = parseInt(codigoAscii.toString());
      console.log(textoFinal_descifrado3)
      // alert(textoFinal2)

      document.getElementById("txt").innerHTML = textoFinal_descifrado3;


    }

  }

  btnDescifrar.addEventListener('click', escuchar_descifrado)
  btnCifrar.addEventListener('click', escuchar)



console.log(cipher);
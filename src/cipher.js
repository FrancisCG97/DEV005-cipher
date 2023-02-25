const cipher = {

  encode: function (textoInicial, desplazamiento) {

    const desplazamientoNumero = parseInt(desplazamiento);//document.getElementById("offset").value;
    console.log(desplazamientoNumero);
    let textoFinal = "";

    for (let i = 0; i < textoInicial.length; i++) {
      const charOriginal = textoInicial.charCodeAt(i); //textoInicialPartido[i].charCodeAt(0);
      const textoAconvertir = charOriginal + desplazamientoNumero;

      const letraConvertida = String.fromCharCode(textoAconvertir);
      console.log(letraConvertida);

      textoFinal += letraConvertida;

      document.getElementById("txt").innerHTML = textoFinal;

    }
  },


  myMethod: function (params) {
    // ...hacer algo
  }

};


export default cipher;

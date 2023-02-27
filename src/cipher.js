const cipher = {

  encode: function (desplazamiento, textoInicial) {
    if (!textoInicial || !desplazamiento) {
      throw new TypeError()
    }
    const desplazamientoNumero = parseInt(desplazamiento);
    let textoFinal = "";

    for (let i = 0; i < textoInicial.length; i++) {
      const charOriginal = textoInicial.charCodeAt(i);
      let letraConvertida = "";
      let textoAconvertir = "";

      if (65 <= charOriginal && charOriginal <= 90) {
        textoAconvertir = (((charOriginal + desplazamientoNumero) - 65) % 26) + 65;
        letraConvertida = String.fromCharCode(textoAconvertir);
      }
      else {
        alert("Favor ingresar letras en mayusculas");
      }
      textoFinal += letraConvertida;
    }
    return textoFinal;
  },

  decode: function (desplazamiento_descifrar, textoCifrado) {
    if (!textoCifrado || !desplazamiento_descifrar) {
      throw new TypeError()
    }
    const desplazamientoNumero = parseInt(desplazamiento_descifrar);
    let textoDescifrado = "";

    for (let j = 0; j < textoCifrado.length; j++) {
      const textoOriginal = textoCifrado.charCodeAt(j);
      let letraDescifrada = ''
      let letraDescifradaConvertida = "";

      if (65 <= textoOriginal && textoOriginal <= 90) {
        letraDescifrada = (((textoOriginal - desplazamientoNumero) + 65) % 26) + 65;
        letraDescifradaConvertida = String.fromCharCode(letraDescifrada);
      }
      else {
        alert('Favor ingresar letras en mayusculas');
      }

      textoDescifrado += letraDescifradaConvertida;
    }
    return textoDescifrado;
  }

};

export default cipher;

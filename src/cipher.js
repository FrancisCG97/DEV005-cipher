const cipher = {

};
//LOGICA

const btnCifrar = document.getElementById('cifrar')

const ascii = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
    85, 86, 87, 88, 89, 90]

let index = 0;

function prueba() {
    let codigo = ascii.charCodeAt(index);
    console.log(codigo);
}

function escuchar3() {

    console.log("qwerty")
    // const textoInicial = document.getElementById("txt-cifrar").value;
    // console.log(textoInicial)
    // document.getElementById("txt").innerHTML = textoInicial;
}

//  btnCifrar.addEventListener('click', escuchar)

export default cipher;

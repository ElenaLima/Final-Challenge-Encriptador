function encriptar(){ //identificación de variables para encriptar y desencriptar el texto //
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo")
let muñeco = document.getElementById("muñeco");

// Verifica si el texto contiene mayúsculas o acentos//
if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
    alert("El texto no debe contener mayúsculas ni acentos.");
    return; // Sale de la función si se detecta un error
}
let textoCifrado=texto //Establece el cifrado del texto//
.replace(/e/gi,"enter")
.replace(/i/gi,"ines")
.replace(/a/gi,"ai")
.replace(/o/gi,"ober")
.replace(/u/gi,"ufat");


if (texto.length !=0){ //Da funcionalidad al encriptado de texto y cambia el texto e imagen segun corresponda//
    document.getElementById("texto").value= textoCifrado;
    tituloMensaje.textContent="Texto encriptado con éxito";
    parrafo.textContent="";
    muñeco.src = "./img/encriptado.jpg";
}
else {
    muñeco.src = "./img/muñeco.jpg";
    tituloMensaje.textContent ="Ningún mensaje fue encontrado";
    parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    alert("Ingresa texto");
}
}

function desencriptar(){ //Deshace la encriptación y devuelve al inicio del programa//
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo")
let muñeco = document.getElementById("muñeco");
let texto = document.getElementById("texto").value;

let textoCifrado=texto
.replace(/enter/gi,"e")
.replace(/ines/gi,"i")
.replace(/ai/gi,"a")
.replace(/ober/gi,"o")
.replace(/ufat/gi,"u");

if (texto.length !=0){
    document.getElementById("texto").value= textoCifrado;
    tituloMensaje.textContent="Texto desencriptado con éxito";
    parrafo.textContent="";
    muñeco.src = "./img/desencriptado.png";
}
else {
    muñeco.src = "./img/muñeco.jpg";
    tituloMensaje.textContent ="Ningún mensaje fue encontrado";
    parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    alert("Ingresa texto");
}
}



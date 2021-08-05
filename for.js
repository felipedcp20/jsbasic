

var frutas = ["Manzana", "Pera", "Naranja", "Platano", "Uva"];

function saludar (frutas){
    console.log("hola: " + frutas);
}

for (i = 0; i < frutas.length; i++) {
    saludar(frutas[i])
}

for (e of frutas) {
    saludar(e)
}
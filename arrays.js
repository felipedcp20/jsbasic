var frutas = ["manzana","limon","naranja"];
console.log(frutas)// imprime el arreglo
console.log(frutas[0])// accede a un elemento especifico del array

//metodos de array.(mutar)

//metodo push
var masfrutas = frutas.push("naranja");
console.log(frutas);

//metodo pop sacar el ultipo elemento del array
var sacar = frutas.pop();
console.log(sacar);

//metodo para agragar un elemento de primeras al array
var primeras = frutas.unshift("zapote");
console.log(frutas);

//metodo para sacar el primer elemento
var primero = frutas.shift()
console.log(primero);

// metodo para buscar un arreglos y saber su posicion
var posicion = frutas.indexOf("limon")
console.log(posicion)
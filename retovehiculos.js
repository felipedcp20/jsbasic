
var autos = [];


function vehiculo (marca,modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

for (i = 0; i < 30; i++) {
    console.log(`Vehiculo: ${i +1}`)
    var marca = prompt("ingresa la marca: ");
    var modelo = prompt("ingresa el modelo: ");
    var año = prompt("ingresa el año: ")
    autos.push(auto = new vehiculo(marca,modelo,año))
    }

console.log(autos)

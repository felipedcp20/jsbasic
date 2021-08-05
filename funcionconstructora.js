var carros = [];

function auto (marca,modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

var autonuevo = new auto("toyota","corolla","2021")
var autonuevo2 = new auto("tesla","model 2","2022")

carros.push(autonuevo);
carros.push(autonuevo2);
console.log(carros);
var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 } ]


var newarray = articulos.filter(function(articulos){
    return articulos.costo > 1700
});

console.log(articulos);
console.log(newarray);


var nombresarticulos = articulos.map(function(articulos){
    return articulos.nombre
})
console.log(nombresarticulos);


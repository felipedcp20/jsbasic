var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Bici', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 } ]

    var buscando = articulos.find(function(articulo){
        return articulo.nombre === "Bici"
    })
    
    console.log(buscando)

    // devuelve los articulos pero no los guarda en un nuevo arreglo
    articulos.forEach(function (articulos){
        console.log(articulos.nombre);
    });

    // Return Boleean (True/false)
    var articulosbaratos = articulos.some(function(articulo){
        return articulo.costo > 700
    })

    console.log(articulosbaratos);
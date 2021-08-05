var opc1 = "piedra"
var opc2 = "papel"
var opc3 = "tijera"

function resultado(oponente1,oponente2){

    if (oponente1 != oponente2){
        if (oponente1 === opc1 && oponente2 ===opc2){
            console.log("el oponen{te 2 gano con: "+opc1);
        }else if (oponente1 === opc2 && oponente2 === opc3){
            console.log("El oponente 2 gano con: "+opc2);
        }else if (oponente1 === opc3 && oponente2 === opc2){
            console.log("el oponente 1 gano con: "+opc2)
        }else if (oponente2 === opc1 && oponente1 ===opc2){
            console.log("el oponente 1 gano con: "+opc1);
        }else if (oponente2 === opc2 && oponente1 === opc3){
            console.log("El oponente 1 gano con: "+opc2);
        }else if (oponente2 === opc3 && oponente1 === opc2){
            console.log("el oponente 1 gano con: "+opc2)}
        }else{console.log("ambos usuarios empataron con "+ oponente1 +" y " +oponente2)}
    }

resultado(opc3 , opc2)
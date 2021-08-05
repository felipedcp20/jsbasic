var estudiantes = ["felipe","carlos","maria","andres"]

function saludarestudiante (estudiantes){
    console.log("hola: " + estudiantes)
}

while(estudiantes.length >0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift()
    saludarestudiante(estudiante)
}
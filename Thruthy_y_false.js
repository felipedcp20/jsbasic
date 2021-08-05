
//Ejemplos en los que Boolean devuelve Falso:
a=Boolean(0); //false
b=Boolean(null); //false
c=Boolean(NaN); //false
d=Boolean(undefined); //false
e=Boolean(false); //false
f=Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
g=Boolean(1); //true para 1 o cualquier número diferente de cero (0)
h=Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
i=Boolean([]); //true aunque el array esté vacío
j=Boolean({}); //true aunque el objeto esté vacío
k=Boolean(function(){}); //Cualquier función es verdadera también
l=Boolean(-1); //Cualquier numero negativo devuelve Verdadero

console.log()  // introducir cualquier variable y correr el codigo con node para ver el valor que devuelve
              // la funcion Boolean

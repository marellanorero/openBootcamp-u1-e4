//Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
//Pista: Los números inferiores a 0 son negativos y los superiores, positivos.


function whatIs(numeroIf){
    if(numeroIf > 0) {
        return "Es un número positivo"
    } else if (numeroIf === 0){
        return "Es un 0"
    } else {
        return "Es un número negativo"
    }
}

console.log(whatIs(-1))

//Crea un bucle While, este bucle tendrá que tener como condición que la variable 
//numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
//Incrementar el valor de la variable en uno cada vez que se ejecute.
//Mostrarlo por pantalla cada vez que se ejecute.
let n = 1
while (n < 3) {
    console.log(n)
    n ++;
  }

//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
var i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 3);

//Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable 
//sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
for(numeroFor = 0; numeroFor <=3; numeroFor++){
    console.log(numeroFor)
}

//Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. 
//Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en 
//la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.

const estacion = 'verano';
switch (estacion) {
  case 'otoño':
    console.log('verás como todo puede llevar un hermoso color tierra');
    break;
  case 'invierno':
    console.log('podrás observar el blanco en todo su esplendor');
    break;
  case 'primavera':
    console.log('Tendremos un viaje de colores');
    break;
  case 'verano':
    console.log('La diversión, piscina o mar serán tu mejor aliado');    
    break;
  default:
    console.log('busca, busca, que siempre habrá una estación que buscar');
}
    

// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 03...')

// iterando por cada elemento del array
for (var autor of autores) {
  console.log(autor)
}


// Ahora recorre el array de "dias" usando el loop for, como el ejemplo de arriba
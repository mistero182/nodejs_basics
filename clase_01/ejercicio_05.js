
// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 05...')

// iterando por cada elemento del array
for (var autor of autores ) {

  // Imprimiendo el nombre de los autores en mayuscula
  console.log(autor.nombre.toUpperCase())
}

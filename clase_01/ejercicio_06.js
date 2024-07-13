
// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 06...')

// iterando por cada elemento del array con un forEach
autores.forEach((autor) => {
  console.log(autor)
})

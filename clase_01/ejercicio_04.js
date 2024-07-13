
// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 04...')

// iterando por cada elemento del array
for (var autor of autores ) {

  // Filtrando solamente los autores femeninos
  if (autor.sexo === "femenino") {
    console.log(autor)
  }

}

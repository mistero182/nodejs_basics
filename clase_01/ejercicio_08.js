
// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 08...')

// Generando una nueva lista de autores con 
var nueva_lista_autores = autores.map((autor) => {

  // Eliminando el sexo del autor 
  delete autor.sexo
  // colocando el nombre completo del autor
  autor.nombre = autor.nombre + " " + autor.apellido
  
  // Devolviendo los datos modificados
  return autor
})


console.log(nueva_lista_autores)

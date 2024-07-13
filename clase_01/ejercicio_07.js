
// Importando/Cargando valores de nuestro archivo de autores
const autores = require('../data/autores')

// Imprimiendo log con el numero de ejercicio
console.log('Ejercicio 07...')

// Declarando los datos de nuestro nuevo autor
const nuevo_autor = {
  nombre: "Roberto",
  apellido: "Arlt",
  nacionalidad:  ["Argentino"],
  nacimiento: 1900,
  obras: ["El juguete rabioso", "Los siete locos", "Los lanzallamas"],
  generos: ["Novela", "Teatro", "Periodismo"],
  activo: false,
  sexo: "masculino"
}

// Agregando el nuevo autor a nuestra lista de autores
autores.push(nuevo_autor)

console.log(autores)








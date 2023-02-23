console.log(Math.pow(5,2)) // BEFORE ECMAScript 7
console.log(5 ** 2) // AFTER ECMAScript 7

console.log([1,2,3,4,5,6].includes(3))  //Lanza true o false ,si esta el objeto indicado
console.log([1,2,3,4,5,6].includes(8))


const num = [1,2,3,4,5,6]
for(const n in num){
    console.log(n)
} //Vamos a mostrar las keys o claves del array // BEFORE ECMAS 8

// AFTER ECMAS8
console.log(Object.keys({nombre: 'marian', edad:25})) //VOY A RECIBIR LAS CLAVES O KEYS DEL OBJ
console.log(Object.values({nombre: 'marian', edad:25})) //VOY A RECIBIR LOS VALORES DEL OBJ
console.log(Object.entries({nombre: 'marian', edad:25})) //VOY A RECIBIR LA KEY CON SU VALUE


// Spread = Desplegar // COPIO LOS DATOS EN UN OBJETO NUEVO Y LAS KEYS REPETIDAS , ACTUALIZA AL ULTIMON DATO LEIDO // ECMAS 9

const persona={nombre:'facu',edad:25}
const datosNuevos={altura:1.76,nombre:'facundo'}
const copiaPersona={...persona, ...datosNuevos}
console.log(copiaPersona)  

//ACA SE SUMAN 

const number=[1,2,3,4]
const number2=[5,6,7]
const nume=[...number,...number2]
console.log(nume)


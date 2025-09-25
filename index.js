// https://hp-api.onrender.com/api/characters
const prompt = require("prompt-sync")()
// const personajes = {}
// async function obtenerDatos(){
//     let respuesta = await fetch ("https://hp-api.onrender.com/api/characters")
//     let datos = await respuesta.json()

//     datos.map ((personaje)=>{
//         personajes[personaje.name]= personaje
//     })

    
// }   


// async function principal (){
//     await obtenerDatos()
//     // let nombre = prompt ("Ingrese el nombre del personaje: ")
//     // console.log(personajes[nombre])
//     console.log(personajes)
// }

// principal()

console.log("--------------------")
// https://pokeapi.co/api/v2/pokemon/charizard

async function obtenerDatos(nombre){
    let respuesta =  await fetch ("https://pokeapi.co/api/v2/pokemon/" + nombre)
    if (respuesta.status!==200){
        return false
    }
    let datos = await respuesta.json()
    return datos
}


async function principal (){
    while (true){
        let nombre = prompt ("Ingrese el nombre del personaje: ")
        
        let personaje = await  obtenerDatos(nombre)
        if (personaje){
            
            console.log(personaje.name, personaje.height, personaje.types)
        }{
            console.log ("Existe un error")
        }


        let salir = prompt ("Desea salir? s/n: ")
        if (salir=="s"){
            break
        }
    }
}

principal()



const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
//node NOMBRE
const url = "https://pokeapi.co/api/v2/type"
//funcion para conectar a una api en modo asincrono
function get_data(endpoint, exito, fallo){
    //1. Crear objeto xmlhttp
    const h = new xmlHttpRequest()
    //2. Abrir una conexion a la API
    h.open('GET', endpoint)
    //3. Enviar la request a serve(API)
    h.send()
    //4. Tratamiento de datos de la response
    h.onload = function(){
        exito(h.responseText)
    }
}
//funcion callback: exito
function exito(response){
    const tipos = JSON.parse(response).results
    console.log(tipos)
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('--------------')
    });
}
//funcion callback: fallo
function fallo(status){
    console.log(status)
}
//invocar la funcion
get_data(url, exito, fallo)
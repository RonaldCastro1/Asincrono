const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"
//funcion para conectar a una api en modo asincrono
const get_data = (endpoint)=>{
        //Definir la promesa
        let promise = new Promise((resolve, rejected)=>{
        //1. Crear objeto xmlhttp
        const h = new xmlHttpRequest()
        //2. Abrir una conexion a la API
        h.open('GET', endpoint)
        //3. Enviar la request a serve(API)
        h.send()
        //4. Tratamiento de datos de la response
        h.onload = ()=>{
        if(h.status === 200){
            resolve(h.responseText)
        }else{
            rejected(h.status)
        }
    }
    })
    return promise
}
//funcion callback: exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    console.log(tipos)
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('--------------')
    });
}
//funcion callback: fallo
const fallo = (status)=>{
    console.log(status)
}
//invocar la funcion
/* get_data(url).then((data)=>{
    exito(data)
}).catch((status)=>{
    fallo(status)
}) */
//async await
const f = async function(){
    try {
        let response = await get_data(url)
        exito(response)
    } catch (error) {
        fallo(error)
    }
}
f()
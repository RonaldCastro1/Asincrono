const axios = require('axios')
const endpoint = "https://rickandmortyapi.com/api/character"

let config = {
    url : endpoint,
    method : 'get'
}

const f = async ()=>{
    try {
        let response = await axios(config)
        exito(response.data)

    } catch (error) {
        fallo(error)
    }
}

//funcion callback: exito
const exito = (response)=>{
    const actor = response.results
    console.log(actor)
    actor.forEach(element => {
        console.log(`Actor: ${element.name}`)
        console.log('--------------')
    });
}
//funcion callback: fallo
const fallo = (status)=>{
    console.log(status)
}
f()
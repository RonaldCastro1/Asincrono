const needle = require ('needle')
const endpoint = "https://animechan.vercel.app/api/random"


const f = async()=>{
    try {
        const response = await needle('get', endpoint)
        exito(response)
    } catch (error) {
        fallo(error)
    }
}
//funcion callback: exito
const exito = (response)=>{
    const tipos = response.body.anime
    console.log('Nombre de anime:',tipos)
}
//funcion callback: fallo
const fallo = (status)=>{
    console.log(status)
}
f()
const needle = require('needle')
const endpoint ="https://restcountries.com/v3.1/all" 
needle('get', endpoint)
.then((response)=>{
    return response.body
}).then((results)=>{
    results.forEach(element => {
        console.log('Nombre Oficial:',element.name.official)
        console.log('Pais:',element.name.common)
        console.log() 
    });
})
.catch((error)=>{
    console.error(error)
})
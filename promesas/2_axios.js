const axios = require ('axios')
const endpoint ="https://pokeapi.co/api/v2/type" 
let config = {
    method: 'get',
    url: endpoint
}

axios (config)
.then((data)=>{
    console.log(response)
}).catch((error)=>{
    console.log(Error(`error: ${error`))
})
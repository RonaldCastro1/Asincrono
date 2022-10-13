const axios = require ('axios')
const endpoint ="https://pokeapi.co/api/v2/type" 
let config = {
    method: 'get',
    url: endpoint
}

axios (config)
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(Error(error))
})
const request = require ('request')
const url = "https://meowfacts.herokuapp.com"
let r = request(url,{json:true},function(error, response, body){
    const tipos = response.body.data[0]
    console.log(tipos)
})
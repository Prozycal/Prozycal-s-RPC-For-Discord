

const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Please Be Patient While Waiting Your RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Prozycal's RPC Is Ready!")});
}
module.exports = keepAlive



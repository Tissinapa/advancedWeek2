let hellomes = {
    msg: "Hello world"
}
let echoing = {
    id: "dog"
}
let nums = {
    numbers:[1,2,3]
}

const express = require("express");
const app = express()
const port = 1234

app.get("/hello",(reg, res) =>{
    res.send(hellomes);
})
app.get("/echo/:id",(reg, res) =>{
    res.send(echoing);
})
app.post("/sum",(req , res) =>{

})
app.get("/", (reg , res) => {
    res.send("Testing if this works or not");
});

app.listen(port,() => console.log('listening port',port));
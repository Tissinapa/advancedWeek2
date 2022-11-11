let hellomes = {
    msg: "Hello world"
}


const express = require("express");
const app = express()
const port = 3000

app.get("/hello",(req, res) =>{
    res.send(hellomes);
})
app.get("/echo/:id",(req, res) =>{
    res.send({id: req.params.id});
})

app.get("/", (req , res) => {
    res.send("Testing if this works or not");
});

app.listen(port,() => console.log('listening port',port));
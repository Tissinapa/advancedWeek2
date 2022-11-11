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



app.post("/sum",(req, res) =>{
    let numbers = [1, 2, 3]
    let answer = 0
    for (let i of numbers){
        answer += i
    }
    console.log(answer)
    res.send({sum: answer})
})

app.get("/", (req , res) => {
    res.send("Testing if this works or not");
});

app.listen(port,() => console.log('listening port',port));
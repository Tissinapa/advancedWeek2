let hellomes = {
    msg: "Hello world"
}
let nums = {
    numbers: [1, 2, 3 ]
}




const express = require("express");
const app = express()
const path = require("path")
const port = 3000

app.get("/hello",(req, res) =>{
    res.send(hellomes);
})
app.get("/echo/:id",(req, res) =>{
    res.send({id: req.params.id});
})



app.post("/sum",(req, res) =>{
    let numbers = [1, 2, 3 ,4]
    let answer = 0
    //nums.push(req.body.numbers)
    for (let i of numbers){
        answer += i
    }
    
    res.send({sum: answer})
})
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req , res) => {
    res.send("Testing if this works or not");
});

app.listen(port,() => console.log('listening port',port));
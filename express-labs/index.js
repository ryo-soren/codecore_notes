// main page 

const express = require("express");
const app = express()
app.set("view engine", "ejs")
app.set("views", "views")
const logger = require("morgan")
app.use(logger("dev"))
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) =>{
    res.render("home")
})

app.get("/home", (req, res) =>{
    res.render("home")
})

app.get("/car_status", (req, res) => {
    res.render("car_status")
})

app.get("/submitCar", (req, res) => {

    const year = parseInt(req.query.year);
    let result = ""

    if (year>2022) {
        result = "future"
    }else if(year <= 2022 && year >= 2010){
        result = "new"
    }else{
        result = "old"
    }
    res.render("submitCar", {    
        result: result,
    })

})

app.get("/random_person", (req, res) => {
    res.render("random_person")
})

app.get("/submitPerson", (req, res) => {
    const names = req.query.names.split(",")
    const random = Math.floor(Math.random() * (names.length))
    const randName = names[random]
    console.log(random);
    res.render("submitPerson", {
        randName: randName
    })
})

app.get("/fizz_buzz", (req, res) => {
    res.render("fizz_buzz")
})

app.get("/fizz_buzz_result", (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    let results = [];
    for (let i = 1; i <= 100; i++) {
        if(i % num1 === 0 && i % num2 === 0){
            results.push("fizzbuzz");
        }else if(i % num1 === 0){
            results.push("fizz");
        }else if(i % num2 === 0){
            results.push("buzz");
        }else{
            results.push(i);
        }
    }
    console.log(results, num1, num2);
    res.render("fizz_buzz_result", {
        results: results
    })
})

app.get("/calculator", (req, res) => {
    res.render("calculator")
})

app.get("/calculator_add", (req, res) => {
    const num1_add = parseInt(req.query.num1_add)
    const num2_add = parseInt(req.query.num2_add)
    const total = num1_add + num2_add
    console.log(num1_add, num2_add);
    console.log(total);
    res.render("calculator_add", {
        total: total
    })
})

app.get("/calculator_sub", (req, res) => {
    res.render("calculator_sub")
})
app.get("/calculator_mult", (req, res) => {
    res.render("calculator_mult")
})
app.get("/calculator_div", (req, res) => {
    res.render("calculator_div")
})



const PORT = 3000;
const DOMAIN = "localhost" 

app.listen(PORT, DOMAIN, () => {
    console.log(`server is listening on htttp://${DOMAIN}:${PORT}`);
})
const { response } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require("path")
const logger = require('morgan');

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.set('view engine', 'ejs')
app.set('views', 'views')

const PORT = 3000;
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})

app.get("/", (req, res) => {

    const langSelection = req.cookies.language
    const name = req.cookies.name
    const languages = {
        "english": "Hello",
        "french": "Bonjour",
        "spanish": "Hola"
    }
    let prompt; 
    if (langSelection && name) {
        prompt = `${languages[langSelection]}, ${name}`
        
    }
    console.log(prompt);
    res.render("home", {prompt})
})

app.get("/languages", (req, res) => {
    res.render("languages")
})

app.post("/select_language", (req, res) => {
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 
    const language = req.body.languages
    const name = req.body.name

    res.cookie("language", language, {maxAge: COOKIE_MAX_AGE})
    res.cookie("name", name, {maxAge: COOKIE_MAX_AGE})

    res.redirect("/")
})
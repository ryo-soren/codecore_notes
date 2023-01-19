const express = require('express');
const app = express();
const methodOverride = require("method-override")
const logger = require('morgan');
const path = require("path")
const notesRouter = require('./routes/notes')

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);
app.set('view engine', 'ejs')
app.set('views', 'views')

const PORT = 3000;
const DOMAIN = 'localhost'

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/home", (req, res) =>{
    res.render("home")
})

app.use("/notes", notesRouter)

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})
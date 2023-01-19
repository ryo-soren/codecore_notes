const express = require("express")
// const app = express()
const knex = require("../db/client")
// app.use(express.urlencoded({extended: true}))
const router = express.Router()

router.get("/new", (req,res) => {
    res.render("notes/new", {note: false})
})

router.get("/", (req,res) => {
    knex("notes")
    .orderBy('created_at', "desc")
    .then(notes => {
        res.render("notes/index", {notes: notes})
    })
})

router.get("/:id", (req,res) => {
    knex("notes")
    .where('id', req.params.id)
    .first()
    .then(note => {
        if (!note) {
            res.send("notes/id", {note: false})
        } else {
            res.render("notes/id", {note: note})
        }
    })
})
router.get("/:id/edit", (req,res) => {
    knex("notes")
    .where('id', req.params.id)
    .first()
    .then(note => {
        console.log(note);
        res.render("notes/edit", {note: note})
    })
})

router.post("/", (req,res) => {
    console.log("I am here in post");
    knex("notes")
    .insert({
        content: req.body.content
    })
    .returning("*")
    .then(notes =>{
        const note = notes[0]
        res.redirect(`notes/${note.id}`)
    })
})

router.patch("/:id",(req,res)=> {
    knex('notes')
    .where("id", req.params.id)
    .update({
        content: req.body.content
    })
    .then(() => {
        res.redirect(`/notes/${req.params.id}`)
    })
})

router.delete("/:id", (req,res)=> {
    knex('notes')
    .where('id', req.params.id)
    .delete()
    .then(() =>{
        res.redirect(`/notes`)
    })
})
 

module.exports = router




import React from "react"
import ReactDOM from "react-dom"
import trees from "./images/trees.jpg"
import "./styles/main.css"

const App = () => {
    return(
        <div class="container">
            <h1>Webpack Project</h1>
            <img src={trees} alt="trees"></img>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const image = document.createElement("img")
    image.src = trees;
    const root = document.createElement("div")
    document.querySelector("body").append(root)
    ReactDOM.render(<App/>, root)
})
const express = require('express')
const sqlite3 = require('sqlite3')
const app = new express()
const db = new sqlite3.Database('./db/playlist.db')

app.use(express.static('public'))
app.use(express.json())

app.get("/", (req, res) => {
    res.redirect("/home/index.html")
})

/**
 * 404 Page | Always keep as final get()
 */
app.get("*", (req, res) => {
    res.send(`
    <h1>Error 404</h1><br>
    <p>Sorry. The page you are looking for does not exist.</p>
    <a href="/home/index.html">Back to home</a>`)
})

app.listen(3000, () => console.log("Server started"))
const express = require('express')
const sqlite3 = require('sqlite3')
const app = new express()
const db = new sqlite3.Database('./db/playlist.db')

app.use(express.static('public'))
app.use(express.json())

app.listen(3000, () => console.log("Server started"))
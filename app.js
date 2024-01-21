const express = require('express')

const path = require('path')

const app = express();

app.use(express.static('public/images'));

const port= 3030;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/public/css/general.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/css/general.css'))
})


app.listen(port,() => console.log(`http://localhost:${port}`))
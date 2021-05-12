const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const Router = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(Router)

app.listen(8080, () => {
    console.log('Server running in: https://localhost:8080')
})
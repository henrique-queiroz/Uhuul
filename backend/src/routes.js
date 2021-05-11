const express = require('express')
const app = express()

const router = express.Router()

// Controllers
const Client = require('./controllers/ClientController')

router.get('/', (req, res) => {
    res.send(process.env.DB_USER)
})

console.log(Client.logName);

module.exports = router
const express = require('express')
const app = express()

const router = express.Router()

// Controllers
const Client = require('./controllers/ClientController')

router.get('/client', Client.getAll)
router.post('/client', Client.create)
router.delete('/client/:id', Client.delete)

console.log(Client.logName);

module.exports = router
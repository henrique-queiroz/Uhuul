const express = require('express')
const login = require('./middleware/login')

const router = express.Router()

// Controllers
const Client = require('./controllers/ClientController')
const Provider = require('./controllers/ProviderController')

router.get('/client', login, Client.getAll)
router.post('/client', Client.create)
router.delete('/client/:id', login, Client.delete)
router.post('/client/auth', Client.login)


router.get('/provider', login, Provider.getAll)
router.post('/provider', Provider.create)
router.delete('/provider/:id', login, Provider.delete)
router.post('/provider/auth', Provider.login)


module.exports = router
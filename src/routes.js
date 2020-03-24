const express = require('express')
const Ongcontroller = require('./controllers/OngController')
const Incidentscontroller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', Ongcontroller.index)
routes.post('/ongs', Ongcontroller.create)

routes.get('/incidents', Incidentscontroller.index)
routes.post('/incidents', Incidentscontroller.create)
routes.delete('/incidents/:id', Incidentscontroller.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes

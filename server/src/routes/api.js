const express = require('express')
const api = express.Router()
const blip = require('../services/ApiTakeBlip/dafaultNotification')
const createOperator = require('../controllers/createOperator')

api.use('/blip', blip)

api.post('/createOperator', createOperator)

api.post('/teste', (req, res)=> {

})

module.exports = api
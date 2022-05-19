const express = require("express")
const authController = require("../controllers/authController")
const loginControler = require("../controllers/loginController")
const auth = express.Router()

auth.post('/auth', authController)

auth.post('/login', loginControler)

module.exports = auth

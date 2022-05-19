const mongoose = require('mongoose')
require('../models/Operator')
const OperatorModel = mongoose.model('operators')
const jwt = require('jsonwebtoken')

function authController(req, res){
    const private = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1Mjk4MzQxMCwiaWF0IjoxNjUyOTgzNDEwfQ.8hMklcw8tNfJGQDsxOFal_35axPKtfNQNh4VcakAS0w'
    const token =  req.headers.authorization
    jwt.verify(token, private, (err, decoded)=>{
        if(decoded === undefined){
            res.sendStatus(401)
        }else {
            OperatorModel.findById(decoded.sub).then((operator)=>{
            res.send(JSON.stringify({name: operator.name, email: operator.email}))
            }).catch((err)=>{
            console.log(err)
        })}
    })
}

module.exports = authController
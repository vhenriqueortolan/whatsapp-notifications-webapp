const express = require('express')
const blip = express.Router()
const jwt = require('jsonwebtoken')
const sendMessage = require('./utils')

blip.post('/defaultNotification', (req,res)=>{
    const private = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1Mjk4MzQxMCwiaWF0IjoxNjUyOTgzNDEwfQ.8hMklcw8tNfJGQDsxOFal_35axPKtfNQNh4VcakAS0w'
    const t =  req.headers.authorization.split(',')
    const token = t[0]
    jwt.verify(token, private, (err, decoded)=>{
        console.log(token)
        if(decoded === undefined || null){
            res.sendStatus(401)
        }else {  
            sendMessage(req, res)
        }
    })
    
})

module.exports = blip
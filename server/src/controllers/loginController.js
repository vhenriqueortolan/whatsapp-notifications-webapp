const mongoose = require('mongoose')
require('../models/Operator')
const OperatorModel = mongoose.model('operators')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function loginControler(req, res){
    OperatorModel.findOne({email: req.body.email}).then((operator)=> {
        bcrypt.compare(req.body.password, operator.password, function(err, result) {
            if(err){
                console.log(err) 
            }
            if(!result){
                res.sendStatus(401)
            }else{
                OperatorModel.findOne({email: req.body.email}).then((operator)=>{
                    const private = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1Mjk4MzQxMCwiaWF0IjoxNjUyOTgzNDEwfQ.8hMklcw8tNfJGQDsxOFal_35axPKtfNQNh4VcakAS0w'
                    jwt.sign({sub: operator._id}, private, {expiresIn: '7d'}, (err, token)=>{
                        if(err){
                            console.log(err)
                            sendStatus(401)
                        }else {
                             res.send({"email": operator.email, "name": operator.name, "token": token})
                        }
                        
                    })
                 }).catch((err) => {
                     console.log(err)
                 })
            }    
        })
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = loginControler
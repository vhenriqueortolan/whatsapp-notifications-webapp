const mongoose = require('mongoose')
require('../models/Operator')
const OperatorModel = mongoose.model('operators')
const bcrypt = require('bcrypt')

function createOperator(req, res){
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        const operator = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            admin: req.body.admin
        }

        new OperatorModel(operator).save().then(() => {
            res.sendStatus(201).send({"status": "success"})
        }).catch((err)=>{
            console.log(err)
        })
    })
}

module.exports = createOperator
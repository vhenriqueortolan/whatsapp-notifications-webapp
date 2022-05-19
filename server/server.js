const express = require("express");
const server = express()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose');
const api = require("./src/routes/api");
const auth = require("./src/routes/auth");

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://whatsapp-notifications-webapp:G3marketing3085@cluster0.rcuuh.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Conectado')
}).catch((err) => {
    console.log(err)
}) 

server.use('/', auth)
server.use('/api', api)

server.use(express.static(path.join(__dirname, '..', 'client', 'dist')))
server.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
})

server.listen(5000, () => console.log(`server started on PORT 5000`))
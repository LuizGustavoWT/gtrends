const express = require('express')
const routers = express()
const requests = require('./request');

routers.get('/request/:chave', requests.teste)


module.exports = routers;
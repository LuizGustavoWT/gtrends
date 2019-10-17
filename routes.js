const express = require('express')
const routers = express()
const requests = require('./request');

routers.post('/macrotendencia', requests.macroTendendcia)
routers.post('/microtendencia', requests.microTendendcia)

module.exports = routers;
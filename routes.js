const express = require('express')
const routers = express()
const requests = require('./request');

routers.get('/macrotendencia', requests.macroTendendcia)
routers.get('/microtendencia', requests.microTendendcia)

module.exports = routers;
const express = require('express')
const app = express();
const routes = require('./routes');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors()) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', routes)



app.listen(3333, console.clear())
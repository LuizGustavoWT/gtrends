const express = require('express')
const app = express();
const routes = require('./routes');
const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.use(cors())
app.use('/', routes)



app.listen(3333, console.clear())
const express = require('express')
const app = express()

const initDB = require('./config/connection');
const variables = require('./config/variables');


initDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(variables.appPort, () => {
  console.log('Programming Shikho listening on port ' +  `${variables.appPort}!`)
})

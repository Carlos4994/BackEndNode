const express = require('express')
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config')
const app = express()
// config cors
app.use(cors());
// base de datos 
dbConnection();

app.get('/', (req, res) => {
  res.json({
    ok:true,
    msg:'Hola Mundo'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
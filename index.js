const express = require('express')
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config')
const app = express()
// config cors
app.use(cors());
// lectura y parceo del body
app.use(express.json());
// base de datos 
dbConnection();

app.use('/api/usuarios',require('./routes/usuarios'))

app.listen( process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

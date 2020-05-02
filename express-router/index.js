const express = require('express');
const app = express();
const autores = require('./routes/autores')

app.listen(3000, () => console.log('Servidor iniciado'));

//Agrego las rutas de autores con su router
app.use('/autores', autores);
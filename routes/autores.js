const express = require('express');
const router = express.Router();
const libros = require('./libros');

/* Estas rutas se van a concatenar con la ruta 
   app.use('/autores');
   definida en index.js */
router.get('/', function (req, res) {
  res.send('la ruta es /autores');
});
router.get('/:autorid', function (req, res) {
  const autorid = req.params.autorid;
  res.send('la ruta es /autores/' + autorid);
});

/* Agrego el router de libros para que las rutas 
   se concatenen con esta */
router.use('/:autorid/libros', libros);

module.exports = router;
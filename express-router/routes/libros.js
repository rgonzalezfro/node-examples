const express = require('express');
/* La opción {mergeParams: true} permite acceder 
   al parámetro 'autorid' que se recibe en la ruta /autores/:autorid*/
const router = express.Router({mergeParams: true});

router.get('/', function (req, res) {
    const autorid = req.params.autorid;
    res.send('la ruta es /autores/' + autorid + '/libros');
});
router.get('/:libroid', function (req, res) {
    const autorid = req.params.autorid;
    const libroid = req.params.libroid;
    res.send('la ruta es /autores/' + autorid + '/libros/' + libroid);
});

module.exports = router;
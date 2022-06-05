const { json } = require('express');
const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();

//Esto de aqui es equivalente a lo de arriba
//const express = require (express);
//const router = express.Router();

const productos =require('./data.json');
console. log(productos);

//rutas

router.get('/', (req,res) => {

    res.json(productos);

});

router.get('/:id', (req,res) => {

  const {id} = req.params;
  productos.forEach(tipo => {
      if(tipo.id == id)
      {
          res.json(tipo);
          console.log(tipo.nombre);
          console.log(tipo.autor);
          console.log(tipo.precio);
          console.log(tipo.tipo);
          console.log(tipo.img);
      }
  });

  console.log(productos[id].nombre);
  console.log(productos[id].autor);
  console.log(productos[id].precio);
  console.log(productos[id].tipo);
  console.log(productos[id].img);
  console.log(id);

});

/* ****BOTON DE FILTRO :( ****

router.get('/categoria/:tipo', (req, res) => {

    found = [];

    const {tipo} = req.params;
    productos.forEach(prod => {
        if(prod.tipo == tipo)
        {
            console.log(prod.nombre);
            console.log(prod.autor);
            console.log(prod.precio);
            console.log(prod.tipo);
            console.log(prod.img);
            //found = found + prod;
            //found = found + ", " + prod.nombre;
            found = found + prod.nombre;
        }
    });

         res.json(found);

}); */

 module.exports = router;
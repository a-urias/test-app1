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


/*router.post('/', (req,res) => {
    const {nombre, autor, precio, tipo, img} = req.body;
    //verificacion
    if(nombre && autor&& precio&& tipo&& img){
        const id = productos.length +1;
        const nuevoProductos = {...req.body,id};
        productos.push(nuevoProductos);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(productos);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    res.send("ok");

});


/* router.get('/empresa/fecha', (req,res) =>{
    const data = {
        "name": "Andrea U",
        "id": "1234"

        };
    res.json(data);
 });*/

 /*router.post('/',(req,res) => {
     console.log(req.body);
     res.send("ok");
 })*/

 module.exports = router;
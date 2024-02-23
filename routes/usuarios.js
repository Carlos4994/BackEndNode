// ruta /api/usuarios

const {Router}= require('express');
const { getUsuarios, crearUsuarios } = require('../controllers/usuarios.contollers');

const route =Router();

route.get('/',getUsuarios)
route.post('/',crearUsuarios)


module.exports=route
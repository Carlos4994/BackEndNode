// ruta /api/usuarios

const { Router } = require('express');
const { getUsuarios, crearUsuarios } = require('../controllers/usuarios.contollers');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');

const route = Router();

route.get('/', getUsuarios)

route.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuarios)


module.exports = route
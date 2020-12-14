const router = require('express').Router();
const usuarioRouter = require('./api/usuarios')

router.use('/usuario',usuarioRouter)


module.exports = router;




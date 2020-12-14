const router = require('express').Router();
const { usuario } = require('../../models');
const bcrypt = require('bcryptjs');
const usuarioController = require('../../controllers/UserController');

router.get('/', async (req,res)=>{
    
    const users = await usuario.findAll();
    res.status(200).json(users)
    //res.status(200).send("Hello users")
})

router.post('/register', async (req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const users = await User.create(req.body);
    res.status(200).json(users);
})

router.post('/login', usuarioController.login)

module.exports = router;



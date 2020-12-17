const { usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.login = async (req,res,next) => {
    try{
        const user = await usuario.findOne({ where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    rol: user.rol,
                    email: user.email

                },'hola soy una cadena secreta',{
                    expiresIn: 86400
                })

                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    
                });
            }
            else{
                res.status(401).json({
                    error: 'Error en la validación'
                })
            }
        }
        else{
            res.status(404).json({
                error: 'Error en la validación'
            })
        }

    }
    catch(error){
        res.status(500).send({
            meessage: 'Error!!'
        })
        next(error);
    }
};


exports.register = async (req,res,next) => {

    try{
        req.body.password = bcrypt.hashSync(req.body.password,10);
        let users = await usuario.create(req.body);
        res.status(200).json(users);

    }
    catch(error){

        res.status(401);
        console.log("Unable to create user")
        next(error);

    }



};

exports.list = async(req,res,next) => {

    try{

        let users = await usuario.findAll();
        res.status(200).json(users)
    }
    catch(error){

        res.status(401);
        console.log("Unable to list");
        next(error);
    }

}
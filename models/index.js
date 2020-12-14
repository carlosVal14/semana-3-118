const { Sequelize } = require('sequelize');
const usuarioModelo = require('./usuarios.js')

const sequelize = new Sequelize('FUajBjkkbT', 'FUajBjkkbT', 'lsqnoyU4Qr', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    port: 3306
  });

  const usuario = usuarioModelo(sequelize,Sequelize);

  sequelize.sync({force: false}).then(()=>{
      console.log("Tablas sincronizadas")
  });

module.exports ={
    usuario
}

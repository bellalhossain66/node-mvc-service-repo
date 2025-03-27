require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelizeDB = new Sequelize(
 process.env.MY_DB,
 process.env.DB_USER,
 process.env.DB_PASS,
 {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
 }
)

sequelizeDB.authenticate()
   .then(() => console.log('DB connected.'))
   .catch(err => console.error('DB not connected:', err));

module.exports = sequelizeDB;
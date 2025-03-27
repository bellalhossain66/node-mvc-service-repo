const sequelizeDB = require('../config/dbConfig');
const User = require('../models/userModel');

sequelizeDB.sync({ alter: true})
   .then(() => console.log('Job table synced to DB'))
   .catch(err => console.error('error syncing to DB:', err));
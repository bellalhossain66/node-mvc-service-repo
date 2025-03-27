require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig');
const routes = require('./routes');

const app = express();
app.use(express.json());

//connect to DB
connectDB;
//Use Routes
app.use('/api', routes);

const PORT = process.env.SERVER_TYPE == 'local'?process.env.PORT:3333;
app.listen(PORT, (err) => {
 if(err) console.error(err);
 console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
})
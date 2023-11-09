const express = require('express');
const cors = require('cors');
const { db } = require('./DataBase/db');
const { readdirSync } = require('fs');

require('dotenv').config();

const PORT = process.env.PORT || 5500;

const app = express();

app.use(cors());
app.use(express.json());

readdirSync('./Ticket').map((route) => app.use('/api/test', require('./Ticket/' + route)));

const startServer = async () => {
  try {
    db();
    app.listen(PORT, () => {
      console.log('Server is running on port: ', PORT);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};
startServer();

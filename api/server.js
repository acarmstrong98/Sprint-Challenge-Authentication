const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

const configureRoutes = require('../config/routes.js');

const server = express();


server.use(session({
  name: 'jokes',
  secret: 'This is a secret',
  cookie:{
    maxAge:  1000 * 60 * 60 * 24, //1 day
    secure: false
  },
  httpOnly:true,
  resave: false,
  saveUninitialized: false
}))

server.use(helmet());
server.use(cors());
server.use(express.json());
server.get('/', (req, res) => {
  res.send("It's alive!");
});

configureRoutes(server);

module.exports = server;
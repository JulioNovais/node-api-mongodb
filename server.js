const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const listaCasamentoModel = require('./api/models/lista-casamento-model');

const app = new express();
const port = process.env.PORT || 3000;

// Mongoose DB connection
const mongoOptions = {
  user: "admin",
  pass: "starwars",
  useNewUrlParser: true
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ListaCasamento', mongoOptions);
mongoose.connection.on('error', function(err) {
  console.log('Mongoose error has occured' + err)
});

// Api Cors config
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/lista-casamento-routes');
routes(app);

app.listen(port);

console.log('RESTful NodeJs API server started on: ' + port);

const express = require('express');

const app = new express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const listaCasamentoModel = require('./api/models/lista-casamento-model');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
  next();
});

app.use(function (req, res) {
  // res.status(404).send({url: req.originalUrl + ' poxa, não encontrei nada, só lamento.'})
})

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ListaCasamento');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/lista-casamento-routes');
routes(app);



app.listen(port);

console.log('RESTful NodeJs API server started on: ' + port);
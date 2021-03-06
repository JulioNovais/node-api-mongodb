'use strict';

const mongoose = require('mongoose'), ListaCasamento = mongoose.model('ListaCasamento');


exports.findOne = function (req, res) {
  ListaCasamento.findOne({ codigoCliente: req.params.id }, function (err, lista) {
    if (err) {
      res.send(err);
    } else {
      res.json(lista);
    }
  });
};

exports.findAll = function (req, res) {
  ListaCasamento.find({}, function (err, lista) {
    if (err) {
      res.send(err);
    } else {
      res.json(lista);
    }
  });
}



exports.create = function (req, res) {
  ListaCasamento.findOneAndUpdate({ codigoCliente: req.body.codigoCliente }, req.body, { new: true }, function (err, produtos) {
    if (err) {
      res.send(err);
    }
    if (!produtos) {
      const listaCasamento = new ListaCasamento();
      listaCasamento.codigoCliente = req.body.codigoCliente;
      listaCasamento.produtos = req.body.produtos;

      listaCasamento.save((function (error, lista) {
        if (error) {
          res.json(error);
        } else {
          res.json({
            message: "success",
            data: lista
          });
        }
      }));

    } else {
      res.json({
        message: "success",
        data: produtos
      });
    }
  });
};

exports.delete = function (req, res) {
  ListaCasamento.remove({
    codigoCliente: req.params.id
  }, function (err, listaCasamento) {
    if (err) {
      res.send(err);
    }
    res.json({
      status: "success",
      message: listaCasamento
    })
  })
}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema(
  {
    sku: Number,
    nomeCompleto: String,
    imagemPrincipal: {},
    estados: {}
  });

const ListaCasamentoSchema = new Schema({
  codigoCliente: Number,
  produtos: [produtoSchema]
});

module.exports = mongoose.model('ListaCasamento', ListaCasamentoSchema);

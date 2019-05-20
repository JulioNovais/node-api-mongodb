'use strict';
module.exports = function(app) {
  const listaCasamento = require('../controllers/lista-casamento');

  app.route('/lista-casamento/:id')
  .get(listaCasamento.findOne)
  .delete(listaCasamento.delete);

  app.route('/lista-casamento')
  .get(listaCasamento.findAll)
  .post(listaCasamento.create);

};

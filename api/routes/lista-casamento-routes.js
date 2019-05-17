'use strict';
module.exports = function(app) {
  const listaCasamento = require('../controllers/lista-casamento');

  app.route('/lista-casamento')
  .get(listaCasamento.get)
  .post(listaCasamento.create)
  .delete(listaCasamento.delete);

};

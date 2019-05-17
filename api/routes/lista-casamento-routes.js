'use strict';
module.exports = function(app) {
  const listaCasamento = require('../controllers/lista-casamento');

  app.route('/lista-casamento/:id*?')
  .get(listaCasamento.get)
  .post(listaCasamento.create)
  .delete(listaCasamento.delete);

};

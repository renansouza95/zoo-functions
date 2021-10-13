const data = require('../data/zoo_data');

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas: se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável; se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

// Código feito junto com o Josué

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const findColaborators = data.employees.filter((colaborator) =>
      (colaborator.managers.includes(managerId)));
    const relatadedColaborators = findColaborators.map((related) =>
      `${related.firstName} ${related.lastName}`);
    return relatadedColaborators;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

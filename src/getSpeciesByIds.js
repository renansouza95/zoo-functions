const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids. > rest

function getSpeciesByIds(...ids) {
  if (ids.length > 0) {
    return ids.map((id) => {
      return species.find((specie) => specie.id === id);
    });
  }
  return [];
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

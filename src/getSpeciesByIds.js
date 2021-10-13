const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids. > rest

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

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

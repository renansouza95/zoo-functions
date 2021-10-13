const data = require('../data/zoo_data');

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((element) => element.name === animal);
  return animals.residents.every((element) => element.age > age);
}

console.log(getAnimalsOlderThan('lions', 5));

module.exports = getAnimalsOlderThan;

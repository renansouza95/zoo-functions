const data = require('../data/zoo_data');

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.

// Código feito com a ajuda do Josue

function countAnimals(animal) {
  if (animal === undefined) {
    const listSpecies = {};
    data.species.forEach((animals) => {
      listSpecies[animals.name] = animals.residents.length;
    });
    return listSpecies;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    const howManyAnimals = data.species.find((element) => element.name === specie);
    return howManyAnimals.residents.length;
  }
  const animalsBySex = data.species.find((element) => element.name === specie).residents;
  return animalsBySex.filter((element2) => element2.sex === sex).length;
}

console.log((countAnimals()));

module.exports = countAnimals;

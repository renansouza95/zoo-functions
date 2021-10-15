const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getID = getEmployee.responsibleFor[0];
  const getResidents = data.species.find((animal) => animal.id === getID).residents;
  const sortAnimalsByAge = getResidents.sort((a, b) => b.age - a.age);
  return Object.values(sortAnimalsByAge[0]);
}

module.exports = getOldestFromFirstSpecies;

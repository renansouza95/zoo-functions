const data = require('../data/zoo_data');

const { species, employees } = data;

// Código feito com a ajuda do Rafael Carvalho e Emerson Moreira.
function getSpeciesByIds(ids) {
  return ids.map((id) => species.find((specie) => id.includes(specie.id)).name);
}

function locateAnimals(ids) {
  return ids.map((id) => species.find((specie) => id.includes(specie.id)).location);
}

function fullCoverage() {
  const zooEmployees = [];
  employees.forEach((employee) => {
    zooEmployees.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpeciesByIds(employee.responsibleFor),
      locations: locateAnimals(employee.responsibleFor) });
  });
  return zooEmployees;
}

function findEmployeeByInfo({ name, id }) {
  return fullCoverage().find((employee) => {
    const [firstName, lastName] = employee.fullName.split(' ');
    if (firstName === name || lastName === name || employee.id === id) {
      return employee;
    }
    return null;
  });
}

function getEmployeesCoverage(info) {
  if (!info) return fullCoverage();
  if (!findEmployeeByInfo(info)) {
    throw new Error('Informações inválidas');
  }
  return findEmployeeByInfo(info);
}

module.exports = getEmployeesCoverage;
